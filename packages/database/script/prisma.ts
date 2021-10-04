import fs from "fs/promises";
import path from "path";
import { camelCase, pascalCase } from "change-case";

const prismaPath = path.join(__dirname, "..", "schema.prisma");

const prismaPrimitives = [
  "String",
  "Boolean",
  "Int",
  "Float",
  "DateTime",
  "BigInt"
];

const generator = `
generator client {
  provider = "prisma-client-js"
}
`;

const isPrimitiveType = (typeName: string): boolean => {
  if (prismaPrimitives.includes(typeName)) {
    return true;
  }
  for (const primitive of prismaPrimitives) {
    if (typeName.startsWith(primitive)) {
      return true;
    }
  }
  return false;
};

const camelCaseFields = (fields: string): string =>
  fields
    .split(", ")
    .map(field => camelCase(field))
    .join(", ");

const camelCaseField = (field: string): string => {
  const regex = /(?<model1>[a-z0-9_]+)To(?<model2>[a-z0-9_]+)/u;
  const match = regex.exec(field);
  const groups = match?.groups;
  if (!match || !groups) {
    return camelCase(field);
  }
  const { model1, model2 } = groups;
  return `${camelCase(model1)}To${pascalCase(model2)}`;
};

type FixModel = false | { fixedLine: string; model: string };

const isGenerator = (line: string): boolean =>
  line.includes("generator client {");

const fixModel = (line: string): FixModel => {
  const regex = /model(?<fullModel>\s+(?<model>\w+)\s+)\{/u;
  const match = regex.exec(line);
  const groups = match?.groups;
  if (!match || !groups) {
    return false;
  }
  let fullMatch = match[0];
  const { fullModel, model } = groups;
  fullMatch = fullMatch.replace(
    fullModel,
    fullModel.replace(model, pascalCase(model))
  );
  return {
    model,
    fixedLine: line.replace(match[0], fullMatch)
  };
};

const fixUnique = (line: string): string => {
  const regex = /(?<unique>@@unique\(\[(?<fields>[\w,\s]+)\])/u;
  const match = regex.exec(line);
  const groups = match?.groups;
  if (!match || !groups) {
    return line;
  }
  let fullMatch = match[0];
  const { unique, fields } = groups;
  fullMatch = fullMatch.replace(
    unique,
    unique.replace(fields, camelCaseFields(fields))
  );
  return line.replace(match[0], fullMatch);
};

const fixIndex = (line: string): string => {
  const regex = /(?<index>@@index\(\[(?<fields>[\w,\s]+)\])/u;
  const match = regex.exec(line);
  const groups = match?.groups;
  if (!match || !groups) {
    return line;
  }
  let fullMatch = match[0];
  const { index, fields } = groups;
  fullMatch = fullMatch.replace(
    index,
    index.replace(fields, camelCaseFields(fields))
  );
  return line.replace(match[0], fullMatch);
};

const fixId = (line: string): string => {
  const regex = /(?<id>@@id\(\[(?<fields>[\w,\s]+)\])/u;
  const match = regex.exec(line);
  const groups = match?.groups;
  if (!match || !groups) {
    return line;
  }
  let fullMatch = match[0];
  const { id, fields } = groups;
  fullMatch = fullMatch.replace(
    id,
    id.replace(fields, camelCaseFields(fields))
  );
  return line.replace(match[0], fullMatch);
};

const fixRelation = (line: string): string => {
  const regex = /(?<relation>@relation\((?<fullName>"(?<name>\w+)")?)(?<fullFields>,? ?fields: \[(?<fields>[\w,\s]+)\])?(?<fullReferences>, references: \[(?<references>[\w,\s]+)\])?(?<other>.+)?\)/u;
  const match = regex.exec(line);
  const groups = match?.groups;
  if (!match || !groups) {
    return line;
  }
  let fullMatch = match[0];
  const {
    relation,
    fullName,
    name,
    fullFields,
    fields,
    fullReferences,
    references
  } = groups;
  if (fullName && name) {
    fullMatch = fullMatch.replace(
      relation,
      relation.replace(name, camelCaseField(name))
    );
  }
  if (fullFields && fields) {
    fullMatch = fullMatch.replace(
      fullFields,
      fullFields.replace(fields, camelCaseFields(fields))
    );
  }
  if (fullReferences && references) {
    fullMatch = fullMatch.replace(
      fullReferences,
      fullReferences.replace(references, camelCaseFields(references))
    );
  }
  return line.replace(match[0], fullMatch);
};

const fixMappingName = (line: string, fieldType: string): string => {
  const regex = /^\w+_\w+To(?<target>\w+?)_(?<field>\w+)$/u;
  const match = regex.exec(line);
  const groups = match?.groups;
  if (!match || !groups) {
    return line;
  }
  const { field, target } = groups;
  const fullMatch = match[0];
  console.log(groups);
  return fullMatch.startsWith(target)
    ? fieldType + "_" + field
    : field + "_" + fieldType;
};

const fixField = (line: string): string => {
  const isFieldRegex = /^\s+\w/u;
  if (!isFieldRegex.test(line)) {
    return line;
  }
  const [name, fieldType, ...annotationParts] = line.trim().split(/\s+/u);
  const annotation = annotationParts.join(" ");
  const newName = camelCaseField(fixMappingName(name, fieldType));
  let newFieldType = pascalCase(fieldType);
  if (fieldType.endsWith("?")) {
    newFieldType = `${newFieldType}?`;
  }
  if (fieldType.endsWith("[]")) {
    newFieldType = `${newFieldType}[]`;
  }
  let newAnnotation = annotation;
  if (isPrimitiveType(fieldType) && name !== newName) {
    if (annotation) {
      newAnnotation = `${fixRelation(annotation)} @map("${name}")`;
    } else if (name !== newName) {
      newAnnotation = `@map("${name}")`;
    }
  } else if (annotation) {
    newAnnotation = `${fixRelation(annotation)}`;
  }
  if (newName === "updatedAt") {
    newAnnotation += " @updatedAt";
  }
  return `  ${newName} ${newFieldType} ${newAnnotation}`;
};

const fixPrismaFile = async (): Promise<void> => {
  const text = await fs.readFile(prismaPath, "utf8");

  const lines = text.split("\n");

  const fixedLines = [];
  let currentModel: string | null = null;
  let hasAddedModelMap = false;
  let hasGenerator = false;

  for (const line of lines) {
    hasGenerator = hasGenerator || isGenerator(line);
    const fixModelResult = fixModel(line);
    if (fixModelResult) {
      const { model, fixedLine } = fixModelResult;
      currentModel = model;
      hasAddedModelMap = false;
      fixedLines.push(fixedLine);
      continue;
    }

    // We don't need to change anything if we aren't in a model body
    if (!currentModel) {
      fixedLines.push(line);
      continue;
    }

    // Add the @@map to the table name for the model
    if (!hasAddedModelMap && line === "}") {
      fixedLines.push(`  @@map("${currentModel}")`);
      hasAddedModelMap = true;
    }

    let fixedLine = line;
    fixedLine = fixField(line);
    if (fixedLine !== line) {
      fixedLines.push(fixedLine);
      continue;
    }
    fixedLine = fixUnique(line);
    if (fixedLine !== line) {
      fixedLines.push(fixedLine);
      continue;
    }
    fixedLine = fixIndex(line);
    if (fixedLine !== line) {
      fixedLines.push(fixedLine);
      continue;
    }
    fixedLine = fixId(line);
    if (fixedLine !== line) {
      fixedLines.push(fixedLine);
      continue;
    }
    fixedLines.push(fixedLine);
  }
  if (!hasGenerator) {
    fixedLines.push(generator);
  }

  await fs.writeFile(prismaPath, fixedLines.join("\n"));
};

fixPrismaFile();

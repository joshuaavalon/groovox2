import type { SchemaModel } from "@groovox/graphql-type";

type Result = {
  schemaTypes: unknown[];
  jsonSchemas: unknown[];
};

export const splitSchemaModels = (...modelsArray: SchemaModel[][]): Result => {
  const schemaTypes: unknown[] = [];
  const jsonSchemas: unknown[] = [];
  modelsArray.forEach(models => {
    models.forEach(({ type, schema }) => {
      if (type) {
        schemaTypes.push(type);
      }
      if (schema) {
        jsonSchemas.push(schema);
      }
    });
  });
  return { schemaTypes, jsonSchemas };
};

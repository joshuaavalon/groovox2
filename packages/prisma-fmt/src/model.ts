import type { Block } from "./block";

export const isModel = (line: string): boolean => {
  const regex = /^\s*model\s+(?<name>\w+)\s+\{\s*$/u;
  return regex.test(line);
};

const isField = (line: string): boolean => {
  const regex = /^\s*\w+\s+\w+(?<annotations>\s+.+)?\s*$/u;
  return regex.test(line);
};

export class Model implements Block {
  private name: string;
  private provider?: string;
  private url?: string;

  constructor(line: string) {
    const regex = /^\s*model\s+(?<name>\w+)\s+\{\s*$/u;
    const match = regex.exec(line);
    const groups = match?.groups;
    if (!groups) {
      throw new Error(`Expect: 'model name {'. Actual: '${line}'`);
    }
    this.name = groups.name;
  }

  append(line: string): void {
    const trimmedLine = line.trim();
    if (trimmedLine.length <= 0) {
      return;
    }
    if (isField(line)) {
      this.parseProvider(trimmedLine);
    } else if (trimmedLine.startsWith("url")) {
      this.parseUrl(trimmedLine);
    }
    throw new Error(`Unknown line: '${line}'`);
  }

  private parseProvider(line: string): void {
    const regex = /^provider\s+=\s+(?<provider>\w+)$/u;
    const match = regex.exec(line);
    const groups = match?.groups;
    if (!groups) {
      throw new Error(`Unknown line: '${line}'`);
    }
    this.provider = groups.provider;
  }

  private parseUrl(line: string): void {
    const regex = /^url\s+=\s+(?<url>\w+)$/u;
    const match = regex.exec(line);
    const groups = match?.groups;
    if (!groups) {
      throw new Error(`Unknown line: '${line}'`);
    }
    this.url = groups.url;
  }

  toString(): string {
    if (this.name === "flyway_schema_history") {
      return "";
    }
    let result = "model db {\n";
    if (this.provider) {
      result += `  provider = ${this.provider}\n`;
    }
    if (this.url) {
      result += `  url = ${this.url}\n`;
    }
    result += "}";
    return result;
  }
}

class Field {
  private name: string;
  private type: string;

  constructor(line: string) {
    const regex = /^\s*(?<name>\w+)\s+(?<type>\w+)(?<annotations>\s+.+)?\s*$/u;
    const match = regex.exec(line);
    const groups = match?.groups;
    if (!groups) {
      throw new Error(`Expect: 'model name {'. Actual: '${line}'`);
    }
    this.name = groups.name;
    this.type = groups.type;
    const annotations = groups.annotations.trim().split(/\s+/u);
  }

  private parseRelation(annotation: string): void {}
}

class Relation {
  private name?: string;
  private attributes: { [key: string]: any };

  constructor(line: string) {
    const regex = /^@relation\((?<name>"\w+",\s+)?(?<attributes>.+)\)$/u;
    const match = regex.exec(line);
    const groups = match?.groups;
    if (!groups) {
      throw new Error(`Expect: '@relation'. Actual: '${line}'`);
    }
    if (groups.name) {
      this.parseName(groups.name);
    }
    const attributes = groups.attributes.trim().split(/,\s+/u);
  }

  private parseName(line: string): void {
    const regex = /^"(?<name>\w+)",\s+$/u;
    const match = regex.exec(line);
    const groups = match?.groups;
    if (!groups) {
      throw new Error(`Expect name. Actual: '${line}'`);
    }
    this.name = groups.name;
  }
}

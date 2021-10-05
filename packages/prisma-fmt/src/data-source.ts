import type { Block } from "./block";

export const isDataSource = (line: string): boolean => {
  const regex = /^\s*datasource\s+db\s+\{\s*$/u;
  return regex.test(line);
};

export class DataSource implements Block {
  private provider?: string;
  private url?: string;

  constructor(line: string) {
    if (!isDataSource(line)) {
      throw new Error(`Expect: 'datasource db {'. Actual: '${line}'`);
    }
  }

  append(line: string): void {
    const trimmedLine = line.trim();
    if (trimmedLine.length <= 0) {
      return;
    }
    if (trimmedLine.startsWith("provider")) {
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
    let result = "datasource db {\n";
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

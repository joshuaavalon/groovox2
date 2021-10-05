export interface Block {
  toString(): string;
  append(line: string): void;
}

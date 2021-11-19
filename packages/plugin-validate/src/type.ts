export interface Validator {
  addSchema(schema: unknown): void;
  getSchema(id: string): Validate | null | undefined;
}

export interface Validate {
  (data: unknown): Promise<unknown[] | null | undefined>;
}

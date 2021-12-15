import jsonSchema from "./index.schema.json";

export interface BooleanFilter {
  equal?: boolean;
}

export const booleanFilterSchema = jsonSchema;

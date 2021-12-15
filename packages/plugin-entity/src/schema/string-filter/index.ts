import jsonSchema from "./index.schema.json";

export interface StringFilter {
  contain?: string;
  endWith?: string;
  equal?: string;
  startWith?: string;
  in?: string[];
  notIn?: string[];
  not?: StringFilter;
}

export const stringFilterSchema = jsonSchema;

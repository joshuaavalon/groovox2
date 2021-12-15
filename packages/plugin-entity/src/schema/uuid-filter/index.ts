import jsonSchema from "./index.schema.json";

export interface UUIDFilter {
  equal?: string;
  in?: string[];
  notIn?: string[];
  not?: UUIDFilter;
}

export const uuidFilterSchema = jsonSchema;

import jsonSchema from "./boolean-filter.schema.json";

export type Type = {
  equal?: boolean | null;
  not?: Type | null;
};

export const schema = jsonSchema;

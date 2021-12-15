import jsonSchema from "./index.schema.json";

export const booleanFilterSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
  export interface BooleanFilter {
    equal?: boolean;
  }

  export interface EntitySchemas {
    [jsonSchema.$id]: BooleanFilter;
  }
}

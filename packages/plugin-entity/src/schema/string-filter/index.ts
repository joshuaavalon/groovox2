import jsonSchema from "./index.schema.json";

export const stringFilterSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
  export interface StringFilter {
    contain?: string;
    endWith?: string;
    equal?: string;
    startWith?: string;
    in?: string[];
    notIn?: string[];
    not?: StringFilter;
  }

  export interface EntitySchemas {
    [jsonSchema.$id]: StringFilter;
  }
}

import jsonSchema from "./index.schema.json";

export const uuidFilterSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
  export interface UUIDFilter {
    equal?: string;
    in?: string[];
    notIn?: string[];
    not?: UUIDFilter;
  }

  export interface EntitySchemas {
    [jsonSchema.$id]: UUIDFilter;
  }
}

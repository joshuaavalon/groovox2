import jsonSchema from "./index.schema.json";

export const studioFindOneInputSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
  export interface StudioFindOneInput {
    id: string;
  }

  export interface EntitySchemas {
    [jsonSchema.$id]: StudioFindOneInput;
  }
}

import jsonSchema from "./index.schema.json";

export const studioCreateOneInputSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
  export interface StudioCreateOneInput {
    name: string;
    description: string;
  }

  export interface EntitySchemas {
    [jsonSchema.$id]: StudioCreateOneInput;
  }
}

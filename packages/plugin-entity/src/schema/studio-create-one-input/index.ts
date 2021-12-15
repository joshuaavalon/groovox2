import jsonSchema from "./index.schema.json";

export interface StudioCreateOneInput {
  name: string;
  not: string;
}

export const studioCreateOneInputSchema = jsonSchema;

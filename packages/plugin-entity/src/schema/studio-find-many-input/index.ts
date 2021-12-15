import jsonSchema from "./index.schema.json";

export const studioFindManyInputSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
  export interface StudioFindManyInput {
    id?: UUIDFilter;
    name?: StringFilter;
    description?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    and?: StudioFindManyInput[];
    or?: StudioFindManyInput[];
    not?: StudioFindManyInput[];
  }

  export interface EntitySchemas {
    [jsonSchema.$id]: StudioFindManyInput;
  }
}

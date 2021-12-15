import jsonSchema from "./index.schema.json";

export const dateTimeFilterSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
  export interface DateTimeFilter {
    equal?: Date;
    gt?: Date;
    gte?: Date;
    lt?: Date;
    lte?: Date;
    in?: Date[];
    notIn?: Date[];
    not?: DateTimeFilter;
  }

  export interface EntitySchemas {
    [jsonSchema.$id]: DateTimeFilter;
  }
}

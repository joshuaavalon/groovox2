import jsonSchema from "./index.schema.json";

export const dateTimeNullableFilterSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
  export interface DateTimeNullableFilter {
    equal?: Date | null;
    gt?: Date;
    gte?: Date;
    lt?: Date;
    lte?: Date;
    in?: Date[] | null;
    notIn?: Date[] | null;
    not?: DateTimeNullableFilter | null;
  }

  export interface EntitySchemas {
    [jsonSchema.$id]: DateTimeNullableFilter;
  }
}

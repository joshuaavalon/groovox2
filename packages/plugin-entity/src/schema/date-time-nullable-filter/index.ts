import jsonSchema from "./index.schema.json";

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

export const dateTimeNullableFilterSchema = jsonSchema;

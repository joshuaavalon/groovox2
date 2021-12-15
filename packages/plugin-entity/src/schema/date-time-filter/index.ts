import jsonSchema from "./index.schema.json";

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

export const dateTimeFilterSchema = jsonSchema;

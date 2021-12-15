import { BooleanFilter, booleanFilterSchema } from "./boolean-filter";
import { DateTimeFilter, dateTimeFilterSchema } from "./date-time-filter";
import {
  DateTimeNullableFilter,
  dateTimeNullableFilterSchema
} from "./date-time-nullable-filter";
import {
  DecimalNullableFilter,
  decimalNullableFilterSchema
} from "./decimal-nullable-filter";
import { StringFilter, stringFilterSchema } from "./string-filter";
import {
  StudioCreateOneInput,
  studioCreateOneInputSchema
} from "./studio-create-one-input";
import { UUIDFilter, uuidFilterSchema } from "./uuid-filter";

export type EntityValidationSchemas = {
  [booleanFilterSchema.$id]: BooleanFilter;
  [dateTimeFilterSchema.$id]: DateTimeFilter;
  [dateTimeNullableFilterSchema.$id]: DateTimeNullableFilter;
  [decimalNullableFilterSchema.$id]: DecimalNullableFilter;
  [stringFilterSchema.$id]: StringFilter;
  [studioCreateOneInputSchema.$id]: StudioCreateOneInput;
  [uuidFilterSchema.$id]: UUIDFilter;
};

export const entitySchemas = [
  booleanFilterSchema,
  dateTimeFilterSchema,
  dateTimeNullableFilterSchema,
  decimalNullableFilterSchema,
  stringFilterSchema,
  studioCreateOneInputSchema,
  uuidFilterSchema
] as const;

import { booleanFilterSchema } from "./boolean-filter";
import { dateTimeFilterSchema } from "./date-time-filter";
import { dateTimeNullableFilterSchema } from "./date-time-nullable-filter";
import { decimalNullableFilterSchema } from "./decimal-nullable-filter";
import { stringFilterSchema } from "./string-filter";
import { studioCreateOneInputSchema } from "./studio-create-one-input";
import { studioFindManyInputSchema } from "./studio-find-many-input";
import { studioFindOneInputSchema } from "./studio-find-one-input";
import { uuidFilterSchema } from "./uuid-filter";

export const entitySchemas = [
  booleanFilterSchema,
  dateTimeFilterSchema,
  dateTimeNullableFilterSchema,
  decimalNullableFilterSchema,
  stringFilterSchema,
  studioCreateOneInputSchema,
  studioFindManyInputSchema,
  studioFindOneInputSchema,
  uuidFilterSchema
] as const;

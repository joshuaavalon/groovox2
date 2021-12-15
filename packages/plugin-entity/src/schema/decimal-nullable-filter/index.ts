import jsonSchema from "./index.schema.json";

import type { Decimal } from "@prisma/client/runtime";

export interface DecimalNullableFilter {
  equal?: Decimal | null;
  gt?: Decimal;
  gte?: Decimal;
  lt?: Decimal;
  lte?: Decimal;
  in?: Decimal[] | null;
  notIn?: Decimal[] | null;
  not?: DecimalNullableFilter | null;
}

export const decimalNullableFilterSchema = jsonSchema;

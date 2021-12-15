import jsonSchema from "./index.schema.json";

import type { Decimal } from "@prisma/client/runtime";

export const decimalNullableFilterSchema = jsonSchema;

declare module "@groovox/plugin-entity" {
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

  export interface EntitySchemas {
    [jsonSchema.$id]: DecimalNullableFilter;
  }
}

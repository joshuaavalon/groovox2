import { adaptDateTimeFilter } from "./date-time-filter";
import { adaptStringFilter } from "./string-filter";
import { adaptUUIDFilter } from "./uuid-filter";
import { mapArray } from "./utils";

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["UnitFindManyInput"];

type Output = Prisma.UnitWhereInput;

export const adaptUnitFindManyInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    AND: mapArray(input.and, adaptUnitFindManyInput),
    OR: mapArray(input.or, adaptUnitFindManyInput),
    NOT: mapArray(input.not, adaptUnitFindManyInput),
    id: input.id ? adaptUUIDFilter(input.id) : undefined,
    name: input.name ? adaptStringFilter(input.name) : undefined,
    description: input.description
      ? adaptStringFilter(input.description)
      : undefined,
    createdAt: input.createdAt
      ? adaptDateTimeFilter(input.createdAt)
      : undefined,
    updatedAt: input.updatedAt
      ? adaptDateTimeFilter(input.updatedAt)
      : undefined
  };
  return output;
};

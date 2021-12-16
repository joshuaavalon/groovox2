import { adaptDateTimeFilter } from "./date-time-filter";
import { adaptStringFilter } from "./string-filter";
import { adaptUUIDFilter } from "./uuid-filter";
import { mapArray } from "./utils";

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagFindManyInput"];

type Output = Prisma.TagWhereInput;

export const adaptTagFindManyInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    AND: mapArray(input.and, adaptTagFindManyInput),
    OR: mapArray(input.or, adaptTagFindManyInput),
    NOT: mapArray(input.not, adaptTagFindManyInput),
    id: input.id ? adaptUUIDFilter(input.id) : undefined,
    name: input.name ? adaptStringFilter(input.name) : undefined,
    description: input.description
      ? adaptStringFilter(input.description)
      : undefined,
    categoryId: input.categoryId
      ? adaptUUIDFilter(input.categoryId)
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

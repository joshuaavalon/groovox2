import { adaptDateTimeFilter } from "./date-time-filter";
import { adaptStringFilter } from "./string-filter";
import { adaptUUIDFilter } from "./uuid-filter";
import { mapArray } from "./utils";

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagCategoryFindManyInput"];

type Output = Prisma.TagCategoryWhereInput;

export const adaptTagCategoryFindManyInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    AND: mapArray(input.and, adaptTagCategoryFindManyInput),
    OR: mapArray(input.or, adaptTagCategoryFindManyInput),
    NOT: mapArray(input.not, adaptTagCategoryFindManyInput),
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

import { adaptDateNullableFilter } from "./date-nullable-filter";
import { adaptDateTimeFilter } from "./date-time-filter";
import { adaptStringFilter } from "./string-filter";
import { adaptUUIDFilter } from "./uuid-filter";
import { mapArray } from "./utils";

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["PersonFindManyInput"];

type Output = Prisma.PersonWhereInput;

export const adaptPersonFindManyInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    AND: mapArray(input.and, adaptPersonFindManyInput),
    OR: mapArray(input.or, adaptPersonFindManyInput),
    NOT: mapArray(input.not, adaptPersonFindManyInput),
    id: input.id ? adaptUUIDFilter(input.id) : undefined,
    nameFirst: input.nameFirst ? adaptStringFilter(input.nameFirst) : undefined,
    nameLast: input.nameLast ? adaptStringFilter(input.nameLast) : undefined,
    nameMiddle: input.nameMiddle
      ? adaptStringFilter(input.nameMiddle)
      : undefined,
    nameSort: input.nameSort ? adaptStringFilter(input.nameSort) : undefined,
    description: input.description
      ? adaptStringFilter(input.description)
      : undefined,
    birthDate: input.birthDate
      ? adaptDateNullableFilter(input.birthDate)
      : undefined,
    deathDate: input.deathDate
      ? adaptDateNullableFilter(input.deathDate)
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

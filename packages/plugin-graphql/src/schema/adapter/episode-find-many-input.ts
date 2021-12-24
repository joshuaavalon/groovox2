import { adaptDateTimeFilter } from "./date-time-filter";
import { adaptDateNullableFilter } from "./date-nullable-filter";
import { adaptDecimalNullableFilter } from "./decimal-nullable-filter";
import { adaptStringFilter } from "./string-filter";
import { adaptUUIDFilter } from "./uuid-filter";
import { mapArray } from "./utils";

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeFindManyInput"];

type Output = Prisma.EpisodeWhereInput;

export const adaptEpisodeFindManyInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    AND: mapArray(input.and, adaptEpisodeFindManyInput),
    OR: mapArray(input.or, adaptEpisodeFindManyInput),
    NOT: mapArray(input.not, adaptEpisodeFindManyInput),
    id: input.id ? adaptUUIDFilter(input.id) : undefined,
    name: input.name ? adaptStringFilter(input.name) : undefined,
    contentRating: input.contentRating
      ? adaptStringFilter(input.contentRating)
      : undefined,
    airedDate: input.airedDate
      ? adaptDateNullableFilter(input.airedDate)
      : undefined,
    rating: input.rating ? adaptDecimalNullableFilter(input.rating) : undefined,
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

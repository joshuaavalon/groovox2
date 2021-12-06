import _ from "lodash";
import { filter } from "../../filter";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["MovieFindManyInput"];

type Output = Prisma.MovieWhereInput;

export const findMany = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: filter.uuid(input.id),
    name: filter.string(input.name),
    nameSort: filter.string(input.nameSort),
    contentRating: filter.string(input.contentRating),
    airedDate: filter.dateNullable(input.airedDate),
    tagline: filter.string(input.tagline),
    rating: filter.decimalNullable(input.rating),
    description: filter.string(input.description),
    createdAt: filter.dataTime(input.createdAt),
    updatedAt: filter.dataTime(input.updatedAt),
    AND: input.and?.map(i => findMany(i)) ?? undefined,
    OR: input.or?.map(i => findMany(i)) ?? undefined,
    NOT: input.not?.map(i => findMany(i)) ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

import _ from "lodash";
import { filter } from "../../filter";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagFindManyInput"];

type Output = Prisma.TagWhereInput;

export const findMany = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: filter.uuid(input.id),
    name: filter.string(input.name),
    description: filter.string(input.description),
    categoryId: filter.uuid(input.categoryId),
    createdAt: filter.dataTime(input.createdAt),
    updatedAt: filter.dataTime(input.updatedAt),
    AND: input.and?.map(i => findMany(i)),
    OR: input.or?.map(i => findMany(i)),
    NOT: input.not?.map(i => findMany(i))
  };
  return _.omitBy(result, _.isUndefined);
};

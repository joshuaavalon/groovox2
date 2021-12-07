import _ from "lodash";
import { filter } from "../../filter";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["MovieRoleFindManyInput"];

type Output = Prisma.MovieRoleWhereInput;

export const findMany = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: filter.uuid(input.id),
    type: filter.string(input.type),
    role: filter.string(input.role),
    AND: input.and?.map(i => findMany(i)) ?? undefined,
    OR: input.or?.map(i => findMany(i)) ?? undefined,
    NOT: input.not?.map(i => findMany(i)) ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

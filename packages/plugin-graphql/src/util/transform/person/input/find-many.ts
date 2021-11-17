import _ from "lodash";
import { filter } from "../../filter";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["PersonFindManyInput"];

type Output = Prisma.PersonWhereInput;

export const findMany = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: filter.uuid(input.id),
    nameFirst: filter.string(input.nameFirst),
    nameMiddle: filter.string(input.nameMiddle),
    nameLast: filter.string(input.nameLast),
    nameSort: filter.string(input.nameSort),
    description: filter.string(input.description),
    birthDate: filter.dateNullable(input.birthDate),
    deathDate: filter.dateNullable(input.deathDate),
    createdAt: filter.dataTime(input.createdAt),
    updatedAt: filter.dataTime(input.updatedAt),
    AND: input.and?.map(i => findMany(i)),
    OR: input.or?.map(i => findMany(i)),
    NOT: input.not?.map(i => findMany(i))
  };
  return _.omitBy(result, _.isUndefined);
};

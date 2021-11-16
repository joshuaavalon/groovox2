import _ from "lodash";
import { filter } from "../../filter";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["AttachmentFindManyInput"];

type Output = Prisma.AttachmentWhereInput;

export const findMany = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: filter.uuid(input.id),
    description: filter.string(input.description),
    createdAt: filter.dataTime(input.createdAt),
    AND: input.and?.map(i => findMany(i)),
    OR: input.or?.map(i => findMany(i)),
    NOT: input.not?.map(i => findMany(i))
  };
  return _.omitBy(result, _.isUndefined);
};

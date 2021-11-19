import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["DateTimeFilter"];

type Output = Prisma.DateTimeFilter;

export const dataTime = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    lt: input.lt ?? undefined,
    lte: input.lte ?? undefined,
    gt: input.gt ?? undefined,
    gte: input.gte ?? undefined,
    not: dataTime(input.not)
  };
  return _.omitBy(result, _.isUndefined);
};

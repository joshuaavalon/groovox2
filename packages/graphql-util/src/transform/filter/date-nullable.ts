import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["DateNullableFilter"];

type Output = Prisma.DateTimeNullableFilter;

export const dateNullable = (
  input?: Input | null
): Output | undefined | null => {
  if (_.isNil(input)) {
    return input;
  }
  const result: Output = {
    equals: input.equal,
    gt: input.gt ?? undefined,
    gte: input.gte ?? undefined,
    in: input.in,
    lt: input.lt ?? undefined,
    lte: input.lte ?? undefined,
    notIn: input.notIn,
    not: dateNullable(input.not)
  };
  return _.omitBy(result, _.isUndefined);
};

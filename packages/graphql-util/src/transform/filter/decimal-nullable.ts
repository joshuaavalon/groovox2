import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["DecimalNullableFilter"];

type Output = Prisma.DecimalNullableFilter;

export const decimalNullable = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    equals: input.equal,
    in: input.in,
    notIn: input.notIn,
    lt: input.lt,
    lte: input.lte,
    gt: input.gt,
    gte: input.gte,
    not: decimalNullable(input.not)
  };
  return _.omitBy(result, _.isUndefined);
};

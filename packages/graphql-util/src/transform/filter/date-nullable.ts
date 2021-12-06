import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["DateNullableFilter"];

type Output = Prisma.DateTimeNullableFilter;

export const dateNullable = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const { not, equal, ...others } = input;
  const result = {
    ...others,
    not: dateNullable(not),
    equals: equal
  };
  return _.omitBy(result, _.isUndefined);
};

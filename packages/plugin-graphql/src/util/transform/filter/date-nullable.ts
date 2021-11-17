import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../nexus.generated";

type Input = NexusGenInputs["DateNullableFilter"];

type Output = Prisma.DateTimeNullableFilter;

export const dateNullable = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  return _.omitBy(input, _.isUndefined);
};

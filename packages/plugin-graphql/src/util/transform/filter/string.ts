import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../nexus.generated";

type Input = NexusGenInputs["StringFilter"];

type Output = Prisma.StringFilter;

export const string = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    contains: input.contain ?? undefined,
    endsWith: input.endWith ?? undefined,
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    not: string(input.not),
    startsWith: input.startWith ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../nexus.generated";

type Input = NexusGenInputs["StringFilter"];

type Output = Prisma.StringFilter;

export const string = (input?: Input | null): Output => {
  if (_.isNil(input)) {
    return {};
  }
  return {
    contains: input.contain ?? undefined,
    endsWith: input.endWith ?? undefined,
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    not: string(input.not),
    startsWith: input.startWith ?? undefined
  };
};

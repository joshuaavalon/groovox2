import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../nexus.generated";

type Input = NexusGenInputs["UUIDFilter"];

type Output = Prisma.StringFilter;

export const uuid = (input?: Input | null): Output => {
  if (_.isNil(input)) {
    return {};
  }
  return {
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    not: uuid(input.not)
  };
};

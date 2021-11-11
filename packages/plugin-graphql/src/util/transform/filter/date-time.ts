import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../nexus.generated";

type Input = NexusGenInputs["DateTimeFilter"];

type Output = Prisma.DateTimeFilter;

export const dataTime = (input?: Input | null): Output => {
  if (_.isNil(input)) {
    return {};
  }
  return {
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    lt: input.lt ?? undefined,
    lte: input.lte ?? undefined,
    gt: input.gt ?? undefined,
    gte: input.gte ?? undefined,
    not: dataTime(input.not)
  };
};

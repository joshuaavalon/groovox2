import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["PersonUpdateOneInput"];

type Output = Prisma.PersonUpdateInput;

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result = {
    nameFirst: input.nameFirst ?? undefined,
    nameMiddle: input.nameMiddle ?? undefined,
    nameLast: input.nameLast ?? undefined,
    nameSort: input.nameSort ?? undefined,
    description: input.description ?? undefined,
    birthDate: input.birthDate,
    deathDate: input.deathDate,
    sex: input.sex ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

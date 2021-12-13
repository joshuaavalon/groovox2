import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["PersonUpdateOneInput"];

type Output = Prisma.PersonUpdateArgs["data"];

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result: Output = {
    nameFirst: input.nameFirst ?? undefined,
    nameMiddle: input.nameMiddle ?? undefined,
    nameLast: input.nameLast ?? undefined,
    nameSort: input.nameSort ?? undefined,
    description: input.description ?? undefined,
    birthDate: input.birthDate,
    deathDate: input.deathDate,
    sex: input.sex ?? undefined,
    updatedAt: new Date()
  };
  if (input.unitIds) {
    result.unit = {
      connect: input.unitIds.map(id => ({ id }))
    };
  }
  if (input.tagIds) {
    result.tag = {
      connect: input.tagIds.map(id => ({ id }))
    };
  }
  return _.omitBy(result, _.isUndefined);
};

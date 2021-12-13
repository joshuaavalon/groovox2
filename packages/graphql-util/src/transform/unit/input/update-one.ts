import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["UnitUpdateOneInput"];

type Output = Prisma.UnitUpdateArgs["data"];

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result: Output = {
    name: input.name ?? undefined,
    description: input.description ?? undefined,
    updatedAt: new Date()
  };
  if (input.memberIds) {
    result.person = {
      connect: input.memberIds.map(id => ({ id }))
    };
  }
  if (input.tagIds) {
    result.tag = {
      connect: input.tagIds.map(id => ({ id }))
    };
  }
  return _.omitBy(result, _.isUndefined);
};

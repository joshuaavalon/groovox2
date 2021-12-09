import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagUpdateOneInput"];

type Output = Prisma.TagUpdateArgs["data"];

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result: Output = {
    name: input.name ?? undefined,
    description: input.description ?? undefined,
    categoryId: input.categoryId ?? undefined,
    updatedAt: new Date()
  };
  return _.omitBy(result, _.isUndefined);
};

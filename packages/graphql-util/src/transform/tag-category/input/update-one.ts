import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagCategoryUpdateOneInput"];

type Output = Prisma.TagCategoryUpdateInput;

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result = {
    name: input.name ?? undefined,
    description: input.description ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["TagUpdateOneInput"];

type Output = Prisma.TagUpdateInput;

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result = {
    name: input.name ?? undefined,
    description: input.description ?? undefined,
    categoryId: input.categoryId ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

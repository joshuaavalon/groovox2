import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["MovieRoleUpdateOneInput"];

type Output = Prisma.MovieRoleUpdateArgs["data"];

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result: Output = {
    type: input.type ?? undefined,
    role: input.role ?? undefined,
    updatedAt: new Date()
  };
  return _.omitBy(result, _.isUndefined);
};

import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagAttachmentUpdateOneInput"];

type Output = Prisma.TagAttachmentUpdateInput;

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result = {
    type: input.type ?? undefined,
    description: input.description ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

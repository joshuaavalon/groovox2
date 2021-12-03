import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagAttachmentFindOneInput"];

type Output = Prisma.TagAttachmentWhereUniqueInput;

export const findOne = (input?: Input | null): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const result = {
    id: input.id ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

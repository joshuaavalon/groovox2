import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagAttachmentOrderByInput"][];

type Output = Prisma.TagAttachmentOrderByWithRelationInput[];

const mapValue = (
  input?: NexusGenInputs["TagAttachmentOrderByInput"] | null
): Prisma.TagAttachmentOrderByWithRelationInput | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: input.id ?? undefined,
    type: input.type ?? undefined,
    createdAt: input.createdAt ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

export const attachmentOrderBy = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  return _.compact(input.map(mapValue));
};

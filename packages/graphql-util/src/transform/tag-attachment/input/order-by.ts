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
    name: input.name ?? undefined,
    categoryId: input.categoryId ?? undefined,
    createdAt: input.createdAt ?? undefined,
    updatedAt: input.updatedAt ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

export const orderBy = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  return _.compact(input.map(mapValue));
};

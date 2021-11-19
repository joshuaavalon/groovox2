import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["AttachmentOrderByInput"][];

type Output = Prisma.AttachmentOrderByWithRelationInput[];

const mapValue = (
  input?: NexusGenInputs["AttachmentOrderByInput"] | null
): Prisma.AttachmentOrderByWithRelationInput | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: input.id ?? undefined,
    createdAt: input.createdAt ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

export const orderBy = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  return _.compact(input.map(mapValue));
};

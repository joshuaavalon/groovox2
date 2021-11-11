import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["StudioOrderByInput"][];

type Output = Prisma.StudioOrderByWithRelationInput[];

const mapValue = (
  input?: NexusGenInputs["StudioOrderByInput"] | null
): Prisma.StudioOrderByWithRelationInput => {
  if (_.isNil(input)) {
    return {};
  }
  return {
    id: input.id ?? undefined,
    name: input.name ?? undefined,
    createdAt: input.createdAt ?? undefined,
    updatedAt: input.updatedAt ?? undefined
  };
};

export const orderBy = (input?: Input | null): Output => {
  if (_.isNil(input)) {
    return [];
  }
  return input.map(mapValue);
};

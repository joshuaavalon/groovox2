import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["RoleOrderByInput"][];

type Output = Prisma.RoleOrderByWithRelationInput[];

const mapValue = (
  input?: NexusGenInputs["RoleOrderByInput"] | null
): Prisma.RoleOrderByWithRelationInput | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: input.id ?? undefined,
    name: input.name ?? undefined,
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

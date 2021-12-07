import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["MovieRoleOrderByInput"][];

type Output = Prisma.MovieRoleOrderByWithRelationInput[];

const mapValue = (
  input?: NexusGenInputs["MovieRoleOrderByInput"] | null
): Prisma.MovieRoleOrderByWithRelationInput | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: input.id ?? undefined,
    type: input.type ?? undefined,
    role: input.role ?? undefined,
    sequence: input.sequence ?? undefined,
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

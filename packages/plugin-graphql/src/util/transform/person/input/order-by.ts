import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["PersonOrderByInput"][];

type Output = Prisma.PersonOrderByWithRelationInput[];

const mapValue = (
  input?: NexusGenInputs["PersonOrderByInput"] | null
): Prisma.PersonOrderByWithRelationInput | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: input.id ?? undefined,
    nameFirst: input.nameFirst ?? undefined,
    nameMiddle: input.nameMiddle ?? undefined,
    nameLast: input.nameLast ?? undefined,
    nameSort: input.nameSort ?? undefined,
    birthDate: input.birthDate ?? undefined,
    deathDate: input.deathDate ?? undefined,
    sex: input.sex ?? undefined,
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

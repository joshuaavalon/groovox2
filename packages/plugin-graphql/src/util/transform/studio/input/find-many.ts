import _ from "lodash";
import { filter } from "../../filter";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["StudioFindManyInput"];

type Output = Prisma.StudioWhereInput;

export const findMany = (input?: Input | null): Output => {
  if (_.isNil(input)) {
    return {};
  }
  return {
    id: filter.uuid(input.id),
    name: filter.string(input.name),
    createdAt: filter.dataTime(input.createdAt),
    updatedAt: filter.dataTime(input.updatedAt),
    AND: (input.and ?? []).map(i => findMany(i)),
    OR: (input.or ?? []).map(i => findMany(i)),
    NOT: (input.not ?? []).map(i => findMany(i))
  };
};

import { adaptStringFilter } from "./string-filter";
import { adaptUUIDFilter } from "./uuid-filter";
import { mapArray } from "./utils";

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeRoleFindManyInput"];

type Output = Prisma.EpisodeRoleWhereInput;

export const adaptEpisodeRoleFindManyInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    AND: mapArray(input.and, adaptEpisodeRoleFindManyInput),
    OR: mapArray(input.or, adaptEpisodeRoleFindManyInput),
    NOT: mapArray(input.not, adaptEpisodeRoleFindManyInput),
    id: input.id ? adaptUUIDFilter(input.id) : undefined,
    episodeId: input.episodeId ? adaptUUIDFilter(input.episodeId) : undefined,
    personId: input.personId ? adaptUUIDFilter(input.personId) : undefined,
    type: input.type ? adaptStringFilter(input.type) : undefined,
    role: input.role ? adaptStringFilter(input.role) : undefined
  };
  return output;
};

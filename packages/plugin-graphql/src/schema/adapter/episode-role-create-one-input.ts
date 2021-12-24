import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeRoleCreateOneInput"] & {
  sequence: number;
};

type Output = Prisma.EpisodeRoleCreateArgs["data"];

export const adaptEpisodeRoleCreateOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    episodeId: input.episodeId,
    personId: input.personId,
    type: input.type,
    role: input.role,
    sequence: input.sequence
  };
  return output;
};

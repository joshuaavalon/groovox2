import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeRoleUpdateOneInput"];

type Output = Prisma.EpisodeRoleUpdateArgs["data"];

export const adaptEpisodeRoleUpdateOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    personId: input.personId ?? undefined,
    type: input.type ?? undefined,
    role: input.role ?? undefined,
    updatedAt: new Date()
  };
  return output;
};

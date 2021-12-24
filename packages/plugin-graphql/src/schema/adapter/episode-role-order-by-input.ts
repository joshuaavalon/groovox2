import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeRoleOrderByInput"];

type Output = Prisma.EpisodeRoleOrderByWithRelationInput;

export const adaptEpisodeRoleOrderByInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    type: input.type ?? undefined,
    role: input.role ?? undefined,
    sequence: input.sequence ?? undefined
  };
  return output;
};

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeRoleFindOneInput"];

type Output = Prisma.EpisodeRoleWhereUniqueInput;

export const adaptEpisodeRoleFindOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

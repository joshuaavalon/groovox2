import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeFindOneInput"];

type Output = Prisma.EpisodeWhereUniqueInput;

export const adaptEpisodeFindOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeUpdateOneInput"];

type Output = Prisma.EpisodeUpdateArgs["data"];

export const adaptEpisodeUpdateOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    name: input.name ?? undefined,
    contentRating: input.contentRating ?? undefined,
    airedDate: input.airedDate,
    rating: input.rating,
    description: input.description ?? undefined,
    updatedAt: new Date()
  };
  if (input.roles) {
    output.episodeRole = {
      deleteMany: {},
      createMany: {
        data: input.roles.map(({ type, role, personId }, i) => ({
          type,
          role,
          personId,
          sequence: i
        }))
      }
    };
  }
  return output;
};

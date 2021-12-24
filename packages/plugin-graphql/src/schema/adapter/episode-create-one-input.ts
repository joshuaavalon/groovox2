import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeCreateOneInput"];

type Output = Prisma.EpisodeCreateArgs["data"];

export const adaptEpisodeCreateOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    name: input.name,
    seasonId: input.seasonId,
    episodeNo: input.episodeNo,
    contentRating: input.contentRating,
    airedDate: input.airedDate,
    rating: input.rating,
    description: input.description
  };
  if (input.roles) {
    output.episodeRole = {
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

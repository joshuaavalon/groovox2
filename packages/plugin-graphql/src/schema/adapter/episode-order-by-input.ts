import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["EpisodeOrderByInput"];

type Output = Prisma.EpisodeOrderByWithRelationInput;

export const adaptEpisodeOrderByInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id ?? undefined,
    name: input.name ?? undefined,
    contentRating: input.contentRating ?? undefined,
    airedDate: input.airedDate ?? undefined,
    rating: input.rating ?? undefined,
    createdAt: input.createdAt ?? undefined,
    updatedAt: input.updatedAt ?? undefined
  };
  return output;
};

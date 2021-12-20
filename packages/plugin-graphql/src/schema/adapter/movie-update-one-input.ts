import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieUpdateOneInput"];

type Output = Prisma.MovieUpdateArgs["data"];

export const adaptMovieUpdateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name ?? undefined,
    nameSort: input.nameSort ?? undefined,
    contentRating: input.contentRating ?? undefined,
    airedDate: input.airedDate ?? undefined,
    tagline: input.tagline ?? undefined,
    rating: input.rating ?? undefined,
    description: input.description ?? undefined,
    updatedAt: new Date()
  };
  return output;
};

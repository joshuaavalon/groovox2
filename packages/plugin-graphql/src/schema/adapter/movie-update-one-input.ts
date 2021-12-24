import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieUpdateOneInput"];

type Output = Prisma.MovieUpdateArgs["data"];

export const adaptMovieUpdateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name ?? undefined,
    nameSort: input.nameSort ?? undefined,
    contentRating: input.contentRating ?? undefined,
    airedDate: input.airedDate,
    tagline: input.tagline ?? undefined,
    rating: input.rating,
    description: input.description ?? undefined,
    updatedAt: new Date()
  };
  if (input.alias) {
    output.movieAlias = {
      deleteMany: {},
      createMany: {
        data: input.alias.map((alias, i) => ({
          alias,
          sequence: i
        }))
      }
    };
  }
  if (input.studioIds) {
    output.studio = {
      set: input.studioIds.map(id => ({ id }))
    };
  }
  if (input.roles) {
    output.movieRole = {
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

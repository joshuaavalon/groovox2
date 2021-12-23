import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieCreateOneInput"];

type Output = Prisma.MovieCreateArgs["data"];

export const adaptMovieCreateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name,
    nameSort: input.nameSort,
    contentRating: input.contentRating,
    airedDate: input.airedDate,
    tagline: input.tagline,
    rating: input.rating,
    description: input.description
  };
  if (input.alias) {
    output.movieAlias = {
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
      connect: input.studioIds.map(id => ({ id }))
    };
  }
  if (input.roles) {
    output.movieRole = {
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

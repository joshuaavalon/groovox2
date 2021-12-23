import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieRoleCreateOneInput"] & {
  sequence: number;
};

type Output = Prisma.MovieRoleCreateArgs["data"];

export const adaptMovieRoleCreateOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    movieId: input.movieId,
    personId: input.personId,
    type: input.type,
    role: input.role,
    sequence: input.sequence
  };
  return output;
};

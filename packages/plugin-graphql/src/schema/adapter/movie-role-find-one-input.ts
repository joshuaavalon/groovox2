import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieRoleFindOneInput"];

type Output = Prisma.MovieRoleWhereUniqueInput;

export const adaptMovieRoleFindOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

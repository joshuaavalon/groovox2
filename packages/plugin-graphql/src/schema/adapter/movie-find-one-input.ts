import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieFindOneInput"];

type Output = Prisma.MovieWhereUniqueInput;

export const adaptMovieFindOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

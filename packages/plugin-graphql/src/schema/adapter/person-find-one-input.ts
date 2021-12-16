import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["PersonFindOneInput"];

type Output = Prisma.PersonWhereUniqueInput;

export const adaptPersonFindOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["StudioFindOneInput"];

type Output = Prisma.StudioWhereUniqueInput;

export const adaptStudioFindOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

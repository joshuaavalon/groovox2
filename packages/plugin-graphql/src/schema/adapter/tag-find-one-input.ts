import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagFindOneInput"];

type Output = Prisma.TagWhereUniqueInput;

export const adaptTagFindOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

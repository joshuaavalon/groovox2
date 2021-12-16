import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["BooleanFilter"];

type Output = Prisma.BoolFilter;

export const adaptBooleanFilter: InputAdapter<Input, Output> = input => {
  const output: Output = {
    equals: input.equal ?? undefined
  };
  return output;
};

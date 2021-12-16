import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["UnitCreateOneInput"];

type Output = Prisma.UnitCreateArgs["data"];

export const adaptUnitCreateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name,
    description: input.description
  };
  return output;
};

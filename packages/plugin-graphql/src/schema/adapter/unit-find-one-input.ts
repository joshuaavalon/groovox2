import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["UnitFindOneInput"];

type Output = Prisma.UnitWhereUniqueInput;

export const adaptUnitFindOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

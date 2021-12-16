import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["UnitOrderByInput"];

type Output = Prisma.UnitOrderByWithRelationInput;

export const adaptUnitOrderByInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id ?? undefined,
    name: input.name ?? undefined,
    createdAt: input.createdAt ?? undefined,
    updatedAt: input.updatedAt ?? undefined
  };
  return output;
};

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["StudioOrderByInput"];

type Output = Prisma.StudioOrderByWithRelationInput;

export const adaptStudioOrderByInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id ?? undefined,
    name: input.name ?? undefined,
    createdAt: input.createdAt ?? undefined,
    updatedAt: input.updatedAt ?? undefined
  };
  return output;
};

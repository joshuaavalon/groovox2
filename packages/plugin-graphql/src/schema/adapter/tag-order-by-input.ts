import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagOrderByInput"];

type Output = Prisma.TagOrderByWithRelationInput;

export const adaptTagOrderByInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id ?? undefined,
    name: input.name ?? undefined,
    categoryId: input.categoryId ?? undefined,
    createdAt: input.createdAt ?? undefined,
    updatedAt: input.updatedAt ?? undefined
  };
  return output;
};

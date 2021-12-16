import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["PersonOrderByInput"];

type Output = Prisma.PersonOrderByWithRelationInput;

export const adaptPersonOrderByInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    id: input.id ?? undefined,
    nameFirst: input.nameFirst ?? undefined,
    nameMiddle: input.nameMiddle ?? undefined,
    nameLast: input.nameLast ?? undefined,
    nameSort: input.nameSort ?? undefined,
    birthDate: input.birthDate ?? undefined,
    deathDate: input.deathDate ?? undefined,
    sex: input.sex ?? undefined,
    createdAt: input.createdAt ?? undefined,
    updatedAt: input.updatedAt ?? undefined
  };
  return output;
};

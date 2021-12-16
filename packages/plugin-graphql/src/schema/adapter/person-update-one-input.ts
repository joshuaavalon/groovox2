import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["PersonUpdateOneInput"];

type Output = Prisma.PersonUpdateArgs["data"];

export const adaptPersonUpdateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    nameFirst: input.nameFirst ?? undefined,
    nameMiddle: input.nameMiddle ?? undefined,
    nameLast: input.nameLast ?? undefined,
    nameSort: input.nameSort ?? undefined,
    description: input.description ?? undefined,
    birthDate: input.birthDate,
    deathDate: input.deathDate,
    sex: input.sex ?? undefined,
    updatedAt: new Date()
  };
  if (input.unitIds) {
    output.unit = {
      connect: input.unitIds.map(id => ({ id }))
    };
  }
  if (input.tagIds) {
    output.tag = {
      connect: input.tagIds.map(id => ({ id }))
    };
  }
  return output;
};

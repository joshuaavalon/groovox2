import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["UnitUpdateOneInput"];

type Output = Prisma.UnitUpdateArgs["data"];

export const adaptUnitUpdateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name ?? undefined,
    description: input.description ?? undefined,
    updatedAt: new Date()
  };
  if (input.tagIds) {
    output.tag = {
      set: input.tagIds.map(id => ({ id }))
    };
  }
  if (input.memberIds) {
    output.person = {
      set: input.memberIds.map(id => ({ id }))
    };
  }
  return output;
};

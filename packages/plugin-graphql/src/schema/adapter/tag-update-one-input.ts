import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagUpdateOneInput"];

type Output = Prisma.TagUpdateArgs["data"];

export const adaptTagUpdateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name ?? undefined,
    description: input.description ?? undefined,
    categoryId: input.categoryId ?? undefined,
    updatedAt: new Date()
  };
  return output;
};

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagCreateOneInput"];

type Output = Prisma.TagCreateArgs["data"];

export const adaptTagCreateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name,
    description: input.description,
    categoryId: input.categoryId
  };
  return output;
};

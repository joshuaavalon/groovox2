import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagCategoryUpdateOneInput"];

type Output = Prisma.TagCategoryUpdateArgs["data"];

export const adaptTagCategoryUpdateOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    name: input.name ?? undefined,
    description: input.description ?? undefined,
    updatedAt: new Date()
  };
  return output;
};

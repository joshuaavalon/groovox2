import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagCategoryOrderByInput"];

type Output = Prisma.TagCategoryOrderByWithRelationInput;

export const adaptTagCategoryOrderByInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    id: input.id ?? undefined,
    name: input.name ?? undefined,
    createdAt: input.createdAt ?? undefined,
    updatedAt: input.updatedAt ?? undefined
  };
  return output;
};

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagCategoryCreateOneInput"];

type Output = Prisma.TagCategoryCreateArgs["data"];

export const adaptTagCategoryCreateOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    name: input.name,
    description: input.description
  };
  return output;
};

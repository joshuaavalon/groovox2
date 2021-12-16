import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["TagCategoryFindOneInput"];

type Output = Prisma.TagCategoryWhereUniqueInput;

export const adaptTagCategoryFindOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    id: input.id
  };
  return output;
};

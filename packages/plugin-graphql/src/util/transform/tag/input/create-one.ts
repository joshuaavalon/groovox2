import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["TagCreateOneInput"];

type Output = Prisma.TagCreateInput;

export const createOne = (input: Input): Output => {
  const { name, description, categoryId } = input;
  return { name, description, tagCategory: { connect: { id: categoryId } } };
};

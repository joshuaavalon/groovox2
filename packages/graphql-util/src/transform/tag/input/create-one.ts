import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagCreateOneInput"];

type Output = Prisma.TagCreateArgs["data"];

export const createOne = (input: Input): Output => {
  const { name, description, categoryId } = input;
  return { name, description, tagCategory: { connect: { id: categoryId } } };
};

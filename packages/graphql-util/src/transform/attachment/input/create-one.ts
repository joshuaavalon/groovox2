import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["AttachmentCreateOneInput"];

type Output = Prisma.AttachmentCreateInput;

export const createOne = (input: Input): Output => {
  const { type, description } = input;
  return {
    type,
    description
  };
};

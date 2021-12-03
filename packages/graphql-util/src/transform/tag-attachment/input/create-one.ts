import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagAttachmentCreateOneInput"];

type Output = Prisma.TagAttachmentCreateInput;

export const createOne = (input: Input): Output => {
  const { type, description, tagId } = input;
  return {
    type,
    description,
    tag: { connect: { id: tagId } }
  };
};

import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["AttachmentCreateOneInput"];

type Output = Prisma.AttachmentCreateInput;

export const createOne = (input: Input): Output => {
  const { description, tagId } = input;
  const tag: Prisma.TagCreateNestedManyWithoutAttachmentInput | undefined =
    tagId
      ? {
          connect: {
            id: tagId
          }
        }
      : undefined;

  const result: Output = {
    description,
    tag
  };
  return _.omitBy(result, _.isUndefined) as Output;
};

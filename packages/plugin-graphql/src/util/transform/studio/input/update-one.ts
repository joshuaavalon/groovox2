import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["StudioUpdateOneInput"];

type Output = Prisma.StudioUpdateInput;

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  return {
    name: input.name ?? undefined,
    description: input.description ?? undefined
  };
};

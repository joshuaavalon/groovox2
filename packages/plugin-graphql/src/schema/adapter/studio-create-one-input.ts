import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["StudioCreateOneInput"];

type Output = Prisma.StudioCreateArgs["data"];

export const adaptStudioCreateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name,
    description: input.description
  };
  return output;
};

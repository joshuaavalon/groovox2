import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["StudioUpdateOneInput"];

type Output = Prisma.StudioUpdateArgs["data"];

export const adaptStudioUpdateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    name: input.name ?? undefined,
    description: input.description ?? undefined,
    updatedAt: new Date()
  };
  return output;
};

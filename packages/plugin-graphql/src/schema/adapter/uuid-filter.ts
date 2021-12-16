import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["UUIDFilter"];

type Output = Prisma.StringFilter;

export const adaptUUIDFilter: InputAdapter<Input, Output> = input => {
  const output: Output = {
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    not: input.not ? adaptUUIDFilter(input.not) : undefined
  };
  return output;
};

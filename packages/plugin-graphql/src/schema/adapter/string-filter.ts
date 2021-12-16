import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["StringFilter"];

type Output = Prisma.StringFilter;

export const adaptStringFilter: InputAdapter<Input, Output> = input => {
  const output: Output = {
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    contains: input.contain ?? undefined,
    startsWith: input.startWith ?? undefined,
    endsWith: input.endWith ?? undefined,
    not: input.not ? adaptStringFilter(input.not) : undefined
  };
  return output;
};

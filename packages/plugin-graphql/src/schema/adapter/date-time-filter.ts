import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["DateTimeFilter"];

type Output = Prisma.DateTimeFilter;

export const adaptDateTimeFilter: InputAdapter<Input, Output> = input => {
  const output: Output = {
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    lt: input.lt ?? undefined,
    lte: input.lte ?? undefined,
    gt: input.gt ?? undefined,
    gte: input.gte ?? undefined,
    not: input.not ? adaptDateTimeFilter(input.not) : undefined
  };
  return output;
};

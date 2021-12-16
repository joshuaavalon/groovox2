import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["DateNullableFilter"];

type Output = Prisma.DateTimeNullableFilter;

export const adaptDateNullableFilter: InputAdapter<Input, Output> = input => {
  const output: Output = {
    equals: input.equal,
    in: input.in,
    notIn: input.notIn,
    lt: input.lt ?? undefined,
    lte: input.lte ?? undefined,
    gt: input.gt ?? undefined,
    gte: input.gte ?? undefined,
    not: input.not ? adaptDateNullableFilter(input.not) : undefined
  };
  return output;
};

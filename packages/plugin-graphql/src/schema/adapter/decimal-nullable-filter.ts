import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["DecimalNullableFilter"];

type Output = Prisma.DecimalNullableFilter;

export const adaptDecimalNullableFilter: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    equals: input.equal ?? undefined,
    in: input.in ?? undefined,
    notIn: input.notIn ?? undefined,
    lt: input.lt ?? undefined,
    lte: input.lte ?? undefined,
    gt: input.gt ?? undefined,
    gte: input.gte ?? undefined,
    not: input.not ? adaptDecimalNullableFilter(input.not) : undefined
  };
  return output;
};

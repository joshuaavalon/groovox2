import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["PersonCreateOneInput"];

type Output = Prisma.PersonCreateArgs["data"];

export const adaptPersonCreateOneInput: InputAdapter<Input, Output> = input => {
  const output: Output = {
    nameFirst: input.nameFirst,
    nameMiddle: input.nameMiddle,
    nameLast: input.nameLast,
    nameSort: input.nameSort,
    description: input.description,
    birthDate: input.birthDate,
    deathDate: input.deathDate,
    sex: input.sex
  };
  return output;
};

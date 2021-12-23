import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieRoleOrderByInput"];

type Output = Prisma.MovieRoleOrderByWithRelationInput;

export const adaptMovieRoleOrderByInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    type: input.type ?? undefined,
    role: input.role ?? undefined,
    sequence: input.sequence ?? undefined
  };
  return output;
};

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieRoleUpdateOneInput"];

type Output = Prisma.MovieRoleUpdateArgs["data"];

export const adaptMovieRoleUpdateOneInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    personId: input.personId ?? undefined,
    type: input.type ?? undefined,
    role: input.role ?? undefined,
    updatedAt: new Date()
  };
  return output;
};

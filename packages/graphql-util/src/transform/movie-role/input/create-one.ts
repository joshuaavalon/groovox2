import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["MovieRoleCreateOneInput"];

type Output = Prisma.MovieRoleCreateInput;

export const createOne = (input: Input, sequence: number): Output => {
  const { movieId, personId, type, role } = input;
  return {
    movie: { connect: { id: movieId } },
    person: { connect: { id: personId } },
    type,
    role,
    sequence
  };
};

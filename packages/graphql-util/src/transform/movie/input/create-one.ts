import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["MovieCreateOneInput"];

type Output = Prisma.MovieCreateInput;

export const createOne = (input: Input): Output => input;

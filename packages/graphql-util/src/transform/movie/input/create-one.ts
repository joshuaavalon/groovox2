import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["MovieCreateOneInput"];

type Output = Prisma.MovieCreateArgs["data"];

export const createOne = (input: Input): Output => input;

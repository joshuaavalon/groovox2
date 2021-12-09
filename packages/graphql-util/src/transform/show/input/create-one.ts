import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["ShowCreateOneInput"];

type Output = Prisma.ShowCreateArgs["data"];

export const createOne = (input: Input): Output => input;

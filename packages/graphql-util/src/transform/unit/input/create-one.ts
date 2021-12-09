import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["UnitCreateOneInput"];

type Output = Prisma.UnitCreateArgs["data"];

export const createOne = (input: Input): Output => input;

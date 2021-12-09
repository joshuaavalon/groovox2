import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["StudioCreateOneInput"];

type Output = Prisma.StudioCreateArgs["data"];

export const createOne = (input: Input): Output => input;

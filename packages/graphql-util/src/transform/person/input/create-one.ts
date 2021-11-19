import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["PersonCreateOneInput"];

type Output = Prisma.PersonCreateInput;

export const createOne = (input: Input): Output => input;

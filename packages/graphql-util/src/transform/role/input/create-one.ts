import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["RoleCreateOneInput"];

type Output = Prisma.RoleCreateInput;

export const createOne = (input: Input): Output => input;

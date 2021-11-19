import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["TagCategoryCreateOneInput"];

type Output = Prisma.TagCategoryCreateInput;

export const createOne = (input: Input): Output => input;

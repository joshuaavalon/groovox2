import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "../../../../nexus.generated";

type Input = NexusGenInputs["StudioCreateOneInput"];

type Output = Prisma.StudioCreateInput;

export const createOne = (input: Input): Output => input;

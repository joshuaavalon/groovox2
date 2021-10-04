import { PrismaClient } from "@prisma/client";

export const createDatabase = (): PrismaClient => new PrismaClient();

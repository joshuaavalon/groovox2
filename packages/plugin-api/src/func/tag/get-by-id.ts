import type { PrismaClient } from "@prisma/client";

export const getById = (db: PrismaClient) => async (id: string) => {
  const tag = await db.tag.findUnique({ where: { id } });
  return tag;
};

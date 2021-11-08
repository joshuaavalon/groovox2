import type { PrismaClient } from "@prisma/client";

export const getLatest = (db: PrismaClient) => async () => {
  const version = await db.version.findFirst({
    orderBy: { createdAt: "desc" }
  });
  return version;
};

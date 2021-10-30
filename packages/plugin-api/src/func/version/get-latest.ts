import type { PrismaClient, Version } from "@prisma/client";

export const getLatest = async (db: PrismaClient): Promise<Version | null> => {
  const version = await db.version.findFirst({
    orderBy: { createdAt: "desc" }
  });
  return version;
};

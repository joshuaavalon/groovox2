import DataLoader from "dataloader";

import type { PrismaClient } from "@prisma/client";
import type { BatchLoaderFn } from "../type";

const batchLoad = (db: PrismaClient) => (ids: readonly string[]) =>
  db.tag.findMany({
    where: { id: { in: [...ids] } },
    include: { attachment: { select: { id: true } } }
  });

export const idLoader: BatchLoaderFn<typeof batchLoad> = db =>
  new DataLoader(batchLoad(db));

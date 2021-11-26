import type { FastifyInstance } from "fastify";
import { query } from "../../query";

type Studio = {
  name: string;
  description: string;
};

export const createStudio =
  (server: FastifyInstance, createdIds: string[]) =>
  async (studio: Studio): Promise<void> => {
    const { data } = await query.studio.create(server, {
      data: studio
    });

    if (data) {
      createdIds.push(data.createStudio.id);
    }
  };

export const cleanUp = async (
  server: FastifyInstance,
  createdIds: string[]
): Promise<void> => {
  await query.studio.removeMany(server, {
    where: { id: { in: createdIds } }
  });
};

import type { FastifyInstance } from "fastify";
import { query } from "../../query";

type TagCategory = {
  name: string;
  description: string;
};

type Tag = {
  name: string;
  description: string;
};

export const createTagCategory =
  (server: FastifyInstance, createdIds: string[]) =>
  async (tagCategory: TagCategory, tags: Tag[] = []): Promise<void> => {
    const { data } = await query.tagCategory.create(server, {
      data: tagCategory
    });

    if (data) {
      const categoryId = data.createTagCategory.id;
      createdIds.push(categoryId);

      for (const tag of tags) {
        await query.tag.create(server, {
          data: { ...tag, categoryId }
        });
      }
    }
  };

export const cleanUp = async (
  server: FastifyInstance,
  createdIds: string[]
): Promise<void> => {
  await query.tagCategory.removeMany(server, {
    where: { id: { in: createdIds } }
  });
};

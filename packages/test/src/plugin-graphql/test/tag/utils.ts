import type { FastifyInstance } from "fastify";
import { query } from "../../query";

type Tag = {
  name: string;
  description: string;
};

type TagCategory = {
  name: string;
  description: string;
};

export const createTagCategory =
  (
    server: FastifyInstance,
    createdIds: string[],
    createdCategoryIds: string[]
  ) =>
  async (tagCategory: TagCategory, tags: Tag[] = []): Promise<void> => {
    const { data } = await query.tagCategory.create(server, {
      data: tagCategory
    });

    if (data) {
      const categoryId = data.createTagCategory.id;
      createdCategoryIds.push(categoryId);

      for (const tag of tags) {
        const tagResult = await query.tag.create(server, {
          data: { ...tag, categoryId }
        });
        if (tagResult.data) {
          createdIds.push(tagResult.data.createTag.id);
        }
      }
    }
  };

export const cleanUp = async (
  server: FastifyInstance,
  createdCategoryIds: string[]
): Promise<void> => {
  await query.tagCategory.removeMany(server, {
    where: { id: { in: createdCategoryIds } }
  });
};

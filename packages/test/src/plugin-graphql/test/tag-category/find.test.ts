import { createApp } from "@groovox/app";
import { query } from "../../query";

import type { FastifyInstance } from "fastify";

type Data = {
  name: string;
  description: string;
};

describe("plugin-graphql", () => {
  describe("tagCategory", () => {
    let server: FastifyInstance;
    let id: string;
    const createdIds: string[] = [];
    const createdTagIds: string[] = [];

    const createTagCategory = async (
      tagCategory: Data,
      tags: Data[] = []
    ): Promise<void> => {
      const { data } = await query.tagCategory.create(server, {
        data: tagCategory
      });

      if (data) {
        const categoryId = data.createTagCategory.id;
        createdIds.push(categoryId);

        for (const tag of tags) {
          const tagResult = await query.tag.create(server, {
            data: { ...tag, categoryId }
          });

          if (tagResult.data) {
            createdTagIds.push(tagResult.data.createTag.id);
          }
        }
      }
    };

    beforeAll(async () => {
      server = await createApp();
      await createTagCategory(
        {
          name: "Find TagCategory Name 1",
          description: "Find TagCategory Name 1"
        },
        [
          {
            name: "Find TagCategory Name 1 Tag 1",
            description: "Find TagCategory Name 1 Tag 1"
          },
          {
            name: "Find TagCategory Name 1 Tag 2",
            description: "Find TagCategory Name 1 Tag 2"
          },
          {
            name: "Find TagCategory Name 1 Tag 3",
            description: "Find TagCategory Name 1 Tag 3"
          }
        ]
      );
      await createTagCategory({
        name: "Find TagCategory Name 2",
        description: "Find TagCategory Name 2"
      });
      await createTagCategory({
        name: "Find TagCategory Name 3",
        description: "Find TagCategory Name 3"
      });
    });

    test("find by id", async () => {
      const { data, errors } = await query.tagCategory.find(server, {
        where: { id: createdIds[0] }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategory).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategory } = data;
      expect(tagCategory.id).toBe(id);
      expect(tagCategory.name).toBe("Find TagCategory Name 1");
      expect(tagCategory.description).toBe("Find TagCategory Name 1");
      expect(tagCategory.tags.length).toBe(3);
    });

    test("find by name equal", async () => {
      const { data, errors } = await query.tagCategory.findMany(server, {
        where: { name: { equal: "Find TagCategory Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategories).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategories } = data;
      expect(tagCategories.length).toBe(1);

      const tagCategory = tagCategories[0];
      expect(tagCategory.id).toBe(id);
      expect(tagCategory.name).toBe("Find TagCategory Name 1");
      expect(tagCategory.description).toBe("Find TagCategory Name 1");
      expect(tagCategory.tags.length).toBe(3);
    });

    test("find by name start with", async () => {
      const { data, errors } = await query.tagCategory.findMany(server, {
        where: { name: { startWith: "Find TagCategory" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategories).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategories } = data;
      expect(tagCategories.length).toBe(3);
    });

    test("find by name end with", async () => {
      const { data, errors } = await query.tagCategory.findMany(server, {
        where: { name: { endWith: "3" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategories).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategories } = data;
      expect(tagCategories.length).toBe(1);

      const tagCategory = tagCategories[0];
      expect(tagCategory.id).toBe(id);
      expect(tagCategory.name).toBe("Find TagCategory Name 3");
      expect(tagCategory.description).toBe("Find TagCategory Name 3");
      expect(tagCategory.tags.length).toBe(0);
    });

    afterAll(async () => {
      await query.studio.removeMany(server, {
        where: { id: { in: createdIds } }
      });
    });
  });
});

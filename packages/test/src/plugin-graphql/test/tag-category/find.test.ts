import { createApp } from "@groovox/app";

import { query } from "../../query";
import { cleanUp, createTagCategory } from "./utils";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("tag category", () => {
    let server: FastifyInstance;
    const createdIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
      const create = createTagCategory(server, createdIds);
      await create(
        {
          name: "Find TagCategory Name 1",
          description: "Find TagCategory Desc 1"
        },
        [
          {
            name: "Find TagCategory Tag Name 1",
            description: "Find TagCategory Desc 1 Tag 1"
          },
          {
            name: "Find TagCategory Tag Name 2",
            description: "Find TagCategory Tag Desc 2"
          },
          {
            name: "Find TagCategory Tag Name 3",
            description: "Find TagCategory Tag Desc 3"
          }
        ]
      );
      await create({
        name: "Find TagCategory Name 2",
        description: "Find TagCategory Name 2"
      });
      await create({
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
      expect(tagCategory.id).toBe(createdIds[0]);
      expect(tagCategory.name).toBe("Find TagCategory Name 1");
      expect(tagCategory.description).toBe("Find TagCategory Desc 1");
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
      expect(tagCategory.id).toBe(createdIds[0]);
      expect(tagCategory.name).toBe("Find TagCategory Name 1");
      expect(tagCategory.description).toBe("Find TagCategory Name 1");
      expect(tagCategory.tags.length).toBe(3);
    });

    test("find by name start with", async () => {
      const { data, errors } = await query.tagCategory.findMany(server, {
        where: { name: { startWith: "Find TagCategory" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
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
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategories } = data;
      expect(tagCategories.length).toBe(1);

      const tagCategory = tagCategories[0];
      expect(tagCategory.id).toBe(createdIds[2]);
      expect(tagCategory.name).toBe("Find TagCategory Name 3");
      expect(tagCategory.description).toBe("Find TagCategory Name 3");
      expect(tagCategory.tags.length).toBe(0);
    });

    afterAll(async () => {
      await cleanUp(server, createdIds);
    });
  });
});

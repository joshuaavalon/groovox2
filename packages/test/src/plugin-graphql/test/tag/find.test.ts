import { createApp } from "@groovox/app";

import { query } from "../../query";
import { cleanUp, createTagCategory } from "./utils";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("tag", () => {
    let server: FastifyInstance;
    const createdIds: string[] = [];
    const createdCategoryIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
      const create = createTagCategory(server, createdIds, createdCategoryIds);
      await create(
        {
          name: "Find Tag TagCategory Name 1",
          description: "Find Tag TagCategory Desc 1"
        },
        [
          {
            name: "Find Tag Name 1",
            description: "Find Tag Desc 1"
          },
          {
            name: "Find Tag Name 2",
            description: "Find Tag Desc 2"
          },
          {
            name: "Find Tag Name 3",
            description: "Find Tag Desc 3"
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
      const { data, errors } = await query.tag.find(server, {
        where: { id: createdIds[0] }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data || !data.tag) {
        return;
      }
      const { tag } = data;
      expect(tag.id).toBe(createdIds[0]);
      expect(tag.name).toBe("Find Tag Name 1");
      expect(tag.description).toBe("Find Tag Desc 1");
    });

    test("find by name equal", async () => {
      const { data, errors } = await query.tag.findMany(server, {
        where: { name: { equal: "Find Tag Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data || !data.tags) {
        return;
      }
      const { tags } = data;
      expect(tags.length).toBe(1);

      const tag = tags[0];
      expect(tag.id).toBe(createdIds[0]);
      expect(tag.name).toBe("Find Tag Name 1");
      expect(tag.description).toBe("Find Tag Desc 1");
    });

    test("find by name start with", async () => {
      const { data, errors } = await query.tag.findMany(server, {
        where: { name: { startWith: "Find Tag" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { tags } = data;
      expect(tags.length).toBe(3);
    });

    test("find by name end with", async () => {
      const { data, errors } = await query.tag.findMany(server, {
        where: { name: { endWith: "3" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { tags } = data;
      expect(tags.length).toBe(1);

      const tag = tags[0];
      expect(tag.id).toBe(createdIds[2]);
      expect(tag.name).toBe("Find Tag Name 3");
      expect(tag.description).toBe("Find Tag Desc 3");
    });

    afterAll(async () => {
      await cleanUp(server, createdCategoryIds);
    });
  });
});

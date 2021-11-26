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
          name: "Remove Tag TagCategory Name 1",
          description: "Remove Tag TagCategory Desc 1"
        },
        [
          {
            name: "Remove Tag Name 1",
            description: "Remove Tag Desc 1"
          },
          {
            name: "Remove Tag Name 2",
            description: "Remove Tag Desc 2"
          },
          {
            name: "Remove Tag Name 3",
            description: "Remove Tag Desc 3"
          }
        ]
      );
    });

    test("remove by name", async () => {
      const { data, errors } = await query.tag.removeMany(server, {
        where: { name: { equal: "Remove Tag Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTags.count).toBe(1);
    });

    test("remove by id", async () => {
      const { data, errors } = await query.tag.removeMany(server, {
        where: { id: { equal: createdIds[1] } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTags.count).toBe(1);
    });

    afterAll(async () => {
      await cleanUp(server, createdCategoryIds);
    });
  });
});

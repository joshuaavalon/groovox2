import { createApp } from "@groovox/app";
import { query } from "../../query";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("tagCategory", () => {
    let server: FastifyInstance;
    const name = "Create TagCategory Name 1";
    const description = "Create TagCategory Desc 1";
    const createdIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
    });

    test("create", async () => {
      const { data, errors } = await query.tagCategory.create(server, {
        data: { name, description }
      });
      expect(errors).toBeUndefined();
      expect(data?.createTagCategory).toBeDefined();
      if (!data) {
        return;
      }
      const { createTagCategory } = data;
      expect(createTagCategory.id).toBeDefined();
      expect(createTagCategory.name).toBe(name);
      expect(createTagCategory.description).toBe(description);
      createdIds.push(createTagCategory.id);
    });

    test("create duplicate", async () => {
      const { errors } = await query.tagCategory.create(server, {
        data: { name, description }
      });
      expect(errors).toBeDefined();
    });

    afterAll(async () => {
      await query.tagCategory.removeMany(server, {
        where: { id: { in: createdIds } }
      });
    });
  });
});

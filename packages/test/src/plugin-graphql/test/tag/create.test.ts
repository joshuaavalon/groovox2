import { createApp } from "@groovox/app";

import { query } from "../../query";
import { cleanUp, createTagCategory } from "./utils";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("tag", () => {
    let server: FastifyInstance;
    const name = "Create Tag Name 1";
    const description = "Create Tag Desc 1";
    const createdIds: string[] = [];
    const createdCategoryIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
      console.log("create app");
      const create = createTagCategory(server, createdIds, createdCategoryIds);
      create({
        name: "Create Tag TagCategory Name 1",
        description: "Create Tag TagCategory Desc 1"
      });
    });

    test("create", async () => {
      const { data, errors } = await query.tag.create(server, {
        data: { name, description, categoryId: createdCategoryIds[0] }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { createTag } = data;
      expect(createTag.id).toBeDefined();
      expect(createTag.name).toBe(name);
      expect(createTag.description).toBe(description);
      createdIds.push(createTag.id);
    });

    test("create duplicate", async () => {
      const { errors } = await query.tag.create(server, {
        data: { name, description, categoryId: createdCategoryIds[0] }
      });
      expect(errors).toBeDefined();
    });

    afterAll(async () => {
      await cleanUp(server, createdIds);
    });
  });
});

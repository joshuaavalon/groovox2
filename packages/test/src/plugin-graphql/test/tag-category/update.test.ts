import { createApp } from "@groovox/app";

import { query } from "../../query";
import { cleanUp, createTagCategory } from "./utils";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("tag category", () => {
    let server: FastifyInstance;
    const name = "Update TagCategory Name 1";
    const description = "Update TagCategory Desc 1";

    const createdIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
      const create = createTagCategory(server, createdIds);

      await create({ name, description });
    });

    test("update", async () => {
      const { data, errors } = await query.tagCategory.update(server, {
        where: { id: createdIds[0] },
        data: {
          name: "Update TagCategory Name 2",
          description: "Update TagCategory Desc 2"
        }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { updateTagCategory } = data;
      expect(updateTagCategory.id).toBeDefined();
      expect(updateTagCategory.name).toBe("Update TagCategory Name 2");
      expect(updateTagCategory.description).toBe("Update TagCategory Desc 2");
    });

    afterAll(async () => {
      await cleanUp(server, createdIds);
    });
  });
});

import { createApp } from "@groovox/app";

import { query } from "../../query";
import { cleanUp, createTagCategory } from "./utils";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("tag", () => {
    let server: FastifyInstance;
    const name = "Update Tag Name 1";
    const description = "Update Tag Desc 1";

    const createdIds: string[] = [];
    const createdCategoryIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
      const create = createTagCategory(server, createdIds, createdCategoryIds);

      await create(
        {
          name: "Update Tag TagCategory Name 1",
          description: "Update Tag TagCategory Desc 1"
        },
        [{ name, description }]
      );
      await create({ name, description });
    });

    test("update", async () => {
      const { data, errors } = await query.tag.update(server, {
        where: { id: createdIds[0] },
        data: {
          name: "Update Tag Name 2",
          description: "Update Tag Desc 2"
        }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { updateTag } = data;
      expect(updateTag.id).toBeDefined();
      expect(updateTag.name).toBe("Update Tag Name 2");
      expect(updateTag.description).toBe("Update Tag Desc 2");
    });

    afterAll(async () => {
      await cleanUp(server, createdCategoryIds);
    });
  });
});

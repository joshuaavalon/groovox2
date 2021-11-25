import { createApp } from "@groovox/app";

import { query } from "../../query";
import { cleanUp, createStudio } from "./utils";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let server: FastifyInstance;
    const name = "Update Studio Name 1";
    const description = "Update Studio Desc 1";

    const createdIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
      const create = createStudio(server, createdIds);

      await create({ name, description });
    });

    test("update", async () => {
      const { data, errors } = await query.studio.update(server, {
        where: { id: createdIds[0] },
        data: {
          name: "Update Studio Name 2",
          description: "Update Studio Desc 2"
        }
      });
      expect(errors).toBeUndefined();
      expect(data?.updateStudio).toBeDefined();
      if (!data) {
        return;
      }
      const { updateStudio } = data;
      expect(updateStudio.id).toBeDefined();
      expect(updateStudio.name).toBe("Update Studio Name 2");
      expect(updateStudio.description).toBe("Update Studio Desc 2");
    });

    afterAll(async () => {
      await cleanUp(server, createdIds);
    });
  });
});

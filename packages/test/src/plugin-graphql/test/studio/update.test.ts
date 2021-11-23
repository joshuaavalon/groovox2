import { createApp } from "@groovox/app";
import { query } from "../../query";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let server: FastifyInstance;
    const name = "Update Studio Name 1";
    const description = "Update Studio Desc 1";
    let createdId: string;

    beforeAll(async () => {
      server = await createApp();
      const { data } = await query.studio.create(server, {
        data: { name, description }
      });
      if (data?.createStudio.id) {
        createdId = data.createStudio.id;
      }
    });

    test("update studio", async () => {
      const { data, errors } = await query.studio.update(server, {
        where: { id: createdId },
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
      await query.studio.removeMany(server, {
        where: { id: { equal: createdId } }
      });
    });
  });
});

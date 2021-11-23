import { createApp } from "@groovox/app";
import { query } from "../../query";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let server: FastifyInstance;
    const createdIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();

      const result1 = await query.studio.create(server, {
        data: {
          name: "Remove Studio Name 1",
          description: "Remove Studio Desc 1"
        }
      });
      if (result1.data?.createStudio.id) {
        createdIds.push(result1.data?.createStudio.id);
      }

      const result2 = await query.studio.create(server, {
        data: {
          name: "Remove Studio Name 2",
          description: "Remove Studio Desc 2"
        }
      });
      if (result2.data?.createStudio.id) {
        createdIds.push(result2.data?.createStudio.id);
      }
    });

    test("remove studios by name", async () => {
      const { data, errors } = await query.studio.removeMany(server, {
        where: { name: { equal: "Remove Studio Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.removeStudios).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeStudios.count).toBe(1);
    });

    test("remove studios by id", async () => {
      const { data, errors } = await query.studio.removeMany(server, {
        where: { id: { equal: createdIds[1] } }
      });
      expect(errors).toBeUndefined();
      expect(data?.removeStudios).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeStudios.count).toBe(1);
    });
  });
});

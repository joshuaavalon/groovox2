import { createApp } from "@groovox/app";

import { query } from "../../query";
import { createStudio } from "./utils";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let server: FastifyInstance;
    const createdIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
      const create = createStudio(server, createdIds);

      await create({
        name: "Remove Studio Name 1",
        description: "Remove Studio Desc 1"
      });

      await create({
        name: "Remove Studio Name 2",
        description: "Remove Studio Desc 2"
      });
    });

    test("remove by name", async () => {
      const { data, errors } = await query.studio.removeMany(server, {
        where: { name: { equal: "Remove Studio Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeStudios.count).toBe(1);
    });

    test("remove by id", async () => {
      const { data, errors } = await query.studio.removeMany(server, {
        where: { id: { equal: createdIds[1] } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeStudios.count).toBe(1);
    });
  });
});

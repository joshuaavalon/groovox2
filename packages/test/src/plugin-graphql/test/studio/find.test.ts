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
        data: { name: "Find Studio Name 1", description: "Find Studio Desc 1" }
      });
      if (result1.data?.createStudio.id) {
        createdIds.push(result1.data?.createStudio.id);
      }

      const result2 = await query.studio.create(server, {
        data: { name: "Find Studio Name 2", description: "Find Studio Desc 2" }
      });
      if (result2.data?.createStudio.id) {
        createdIds.push(result2.data?.createStudio.id);
      }

      const result3 = await query.studio.create(server, {
        data: { name: "Find Studio Name 3", description: "Find Studio Desc 3" }
      });
      if (result3.data?.createStudio.id) {
        createdIds.push(result3.data?.createStudio.id);
      }
    });

    test("find studio by id", async () => {
      const { data, errors } = await query.studio.find(server, {
        where: { id: createdIds[0] }
      });
      expect(errors).toBeUndefined();
      expect(data?.studio).toBeDefined();
      if (!data || !data.studio) {
        return;
      }
      const { studio } = data;
      expect(studio.id).toBe(createdIds[0]);
      expect(studio.name).toBe("Find Studio Name 1");
      expect(studio.description).toBe("Find Studio Desc 1");
    });

    test("find studios by name equal", async () => {
      const { data, errors } = await query.studio.findMany(server, {
        where: { name: { equal: "Find Studio Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.studios).toBeDefined();
      if (!data || !data.studios) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(1);

      const studio = studios[0];
      expect(studio.id).toBe(createdIds[0]);
      expect(studio.name).toBe("Find Studio Name 1");
      expect(studio.description).toBe("Find Studio Desc 1");
    });

    test("find studios by name start with", async () => {
      const { data, errors } = await query.studio.findMany(server, {
        where: { name: { startWith: "Find Studio" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.studios).toBeDefined();
      if (!data) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(3);
    });

    test("find studios by name end with", async () => {
      const { data, errors } = await query.studio.findMany(server, {
        where: { name: { endWith: "3" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.studios).toBeDefined();
      if (!data) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(1);

      const studio = studios[0];
      expect(studio.id).toBe(createdIds[2]);
      expect(studio.name).toBe("Find Studio Name 3");
      expect(studio.description).toBe("Find Studio Desc 3");
    });

    afterAll(async () => {
      await query.studio.removeMany(server, {
        where: { id: { in: createdIds } }
      });
    });
  });
});

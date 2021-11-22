import { createApp } from "@groovox/app";
import { query } from "../query";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let server: FastifyInstance;
    let id: string;
    const name = "Studio Name 1";
    const description = "Studio Desc 1";

    beforeAll(async () => {
      server = await createApp();
    });

    test("create studio", async () => {
      const { data, errors } = await query.studio.create(server, {
        data: { name, description }
      });
      expect(errors).toBeUndefined();
      expect(data?.createStudio).toBeDefined();
      if (!data) {
        return;
      }
      const { createStudio } = data;
      expect(createStudio.id).toBeDefined();
      expect(createStudio.name).toBe(name);
      expect(createStudio.description).toBe(description);

      id = createStudio.id;

      await query.studio.create(server, {
        data: { name: "Studio Name 2", description: "Studio Desc 2" }
      });
      await query.studio.create(server, {
        data: { name: "3 Studio Name", description: "3 Studio Desc" }
      });
    });

    test("find studio", async () => {
      const { data, errors } = await query.studio.find(server, {
        where: { id }
      });
      expect(errors).toBeUndefined();
      expect(data?.studio).toBeDefined();
      if (!data || !data.studio) {
        return;
      }
      const { studio } = data;
      expect(studio.id).toBe(id);
      expect(studio.name).toBe(name);
      expect(studio.description).toBe(description);
    });

    test("find studios 1", async () => {
      const { data, errors } = await query.studio.findMany(server, {
        where: { name: { startWith: "Studio" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.studios).toBeDefined();
      if (!data) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(2);
    });

    test("find studios 2", async () => {
      const { data, errors } = await query.studio.findMany(server, {
        where: { name: { contain: "Studio Name" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.studios).toBeDefined();
      if (!data) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(3);
    });

    test("find studios 3", async () => {
      const { data, errors } = await query.studio.findMany(server, {
        where: { name: { endWith: "4" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.studios).toBeDefined();
      if (!data) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(0);
    });

    test("find studios 4", async () => {
      const { data, errors } = await query.studio.findMany(server, {
        where: {}
      });
      expect(errors).toBeUndefined();
      expect(data?.studios).toBeDefined();
      if (!data) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(3);
    });

    test("remove studios 1", async () => {
      const { data, errors } = await query.studio.removeMany(server, {
        where: { name: { startWith: "Studio" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.removeStudios).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeStudios.count).toBe(2);
    });

    test("remove studios 2", async () => {
      const { data, errors } = await query.studio.removeMany(server, {
        where: {}
      });
      expect(errors).toBeUndefined();
      expect(data?.removeStudios).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeStudios.count).toBe(1);
    });

    test("remove studios", async () => {
      const result1 = await query.studio.removeMany(server, {
        where: {}
      });
      expect(result1.errors).toBeUndefined();
      expect(result1.data?.removeStudios).toBeDefined();
      if (!result1.data) {
        return;
      }
      expect(result1.data.removeStudios.count).toBe(0);

      const result2 = await query.studio.findMany(server, {
        where: {}
      });
      expect(result2.errors).toBeUndefined();
      expect(result2.data?.studios).toBeDefined();
      if (!result2.data) {
        return;
      }
      const { studios } = result2.data;
      expect(studios.length).toBe(0);
    });
  });
});

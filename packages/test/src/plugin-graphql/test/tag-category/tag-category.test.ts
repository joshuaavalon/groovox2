import { createApp } from "@groovox/app";
import { query } from "../../query";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("tagCategory", () => {
    let server: FastifyInstance;
    let id: string;
    const name = "TagCategory Name 1";
    const description = "TagCategory Desc 1";

    beforeAll(async () => {
      server = await createApp();
    });

    test("create tagCategory", async () => {
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

      id = createTagCategory.id;

      await query.tagCategory.create(server, {
        data: { name: "TagCategory Name 2", description: "TagCategory Desc 2" }
      });
      await query.tagCategory.create(server, {
        data: { name: "3 TagCategory Name", description: "3 TagCategory Desc" }
      });
    });

    test("find tagCategory", async () => {
      const { data, errors } = await query.tagCategory.find(server, {
        where: { id }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategory).toBeDefined();
      if (!data || !data.tagCategory) {
        return;
      }
      const { tagCategory } = data;
      expect(tagCategory.id).toBe(id);
      expect(tagCategory.name).toBe(name);
      expect(tagCategory.description).toBe(description);
    });

    test("find tagCategories 1", async () => {
      const { data, errors } = await query.tagCategory.findMany(server, {
        where: { name: { startWith: "TagCategory" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategories).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategories } = data;
      expect(tagCategories.length).toBe(2);
    });

    test("find tagCategories 2", async () => {
      const { data, errors } = await query.tagCategory.findMany(server, {
        where: { name: { contain: "TagCategory Name" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategories).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategories } = data;
      expect(tagCategories.length).toBe(3);
    });

    test("find tagCategories 3", async () => {
      const { data, errors } = await query.tagCategory.findMany(server, {
        where: { name: { endWith: "4" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategories).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategories } = data;
      expect(tagCategories.length).toBe(0);
    });

    test("find tagCategories 4", async () => {
      const { data, errors } = await query.tagCategory.findMany(server, {
        where: {}
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategories).toBeDefined();
      if (!data) {
        return;
      }
      const { tagCategories } = data;
      expect(tagCategories.length).toBe(3);
    });

    test("remove tagCategories 1", async () => {
      const { data, errors } = await query.tagCategory.removeMany(server, {
        where: { name: { startWith: "TagCategory" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.removeTagCategories).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTagCategories.count).toBe(2);
    });

    test("remove tagCategories 2", async () => {
      const { data, errors } = await query.tagCategory.removeMany(server, {
        where: {}
      });
      expect(errors).toBeUndefined();
      expect(data?.removeTagCategories).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTagCategories.count).toBe(1);
    });

    test("remove tagCategories", async () => {
      const result1 = await query.tagCategory.removeMany(server, {
        where: {}
      });
      expect(result1.errors).toBeUndefined();
      expect(result1.data?.removeTagCategories).toBeDefined();
      if (!result1.data) {
        return;
      }
      expect(result1.data.removeTagCategories.count).toBe(0);

      const result2 = await query.tagCategory.findMany(server, {
        where: {}
      });
      expect(result2.errors).toBeUndefined();
      expect(result2.data?.tagCategories).toBeDefined();
      if (!result2.data) {
        return;
      }
      const { tagCategories } = result2.data;
      expect(tagCategories.length).toBe(0);
    });
  });
});

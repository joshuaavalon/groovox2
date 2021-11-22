import { createApp } from "@groovox/app";
import { query } from "../query";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("tag", () => {
    let server: FastifyInstance;
    let id: string;
    const name = "Tag Name 1";
    const description = "Tag Desc 1";
    const categoryName = "TagCategory Name 1";
    const categoryDescription = "TagCategory Desc 1";
    let categoryId: string;

    beforeAll(async () => {
      server = await createApp();
    });

    test("create tag", async () => {
      const result1 = await query.tagCategory.create(server, {
        data: { name: categoryName, description: categoryDescription }
      });
      expect(result1.errors).toBeUndefined();
      expect(result1.data).toBeDefined();
      if (!result1.data) {
        return;
      }
      categoryId = result1.data.createTagCategory.id;
      expect(categoryId).toBeDefined();

      const result2 = await query.tag.create(server, {
        data: { name, description, categoryId }
      });
      expect(result2.errors).toBeUndefined();
      expect(result2.data).toBeDefined();
      if (!result2.data) {
        return;
      }
      const { createTag } = result2.data;
      expect(createTag.id).toBeDefined();
      expect(createTag.name).toBe(name);
      expect(createTag.description).toBe(description);
      expect(createTag.category.id).toBe(categoryId);

      id = createTag.id;

      await query.tag.create(server, {
        data: { name: "Tag Name 2", description: "Tag Desc 2", categoryId }
      });
      await query.tag.create(server, {
        data: { name: "3 Tag Name", description: "3 Tag Desc", categoryId }
      });
    });

    test("find tag", async () => {
      const { data, errors } = await query.tag.find(server, {
        where: { id }
      });
      expect(errors).toBeUndefined();
      expect(data?.tag).toBeDefined();
      if (!data || !data.tag) {
        return;
      }
      const { tag } = data;
      expect(tag.id).toBe(id);
      expect(tag.name).toBe(name);
      expect(tag.description).toBe(description);
      expect(tag.category.id).toBe(categoryId);
    });

    test("find tags 1", async () => {
      const { data, errors } = await query.tag.findMany(server, {
        where: { name: { startWith: "Tag" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tags).toBeDefined();
      if (!data) {
        return;
      }
      const { tags } = data;
      expect(tags.length).toBe(2);
    });

    test("find tags 2", async () => {
      const { data, errors } = await query.tag.findMany(server, {
        where: { name: { contain: "Tag Name" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tags).toBeDefined();
      if (!data) {
        return;
      }
      const { tags } = data;
      expect(tags.length).toBe(3);
    });

    test("find tags 3", async () => {
      const { data, errors } = await query.tag.findMany(server, {
        where: { name: { endWith: "4" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tags).toBeDefined();
      if (!data) {
        return;
      }
      const { tags } = data;
      expect(tags.length).toBe(0);
    });

    test("find tags 4", async () => {
      const { data, errors } = await query.tag.findMany(server, {
        where: {}
      });
      expect(errors).toBeUndefined();
      expect(data?.tags).toBeDefined();
      if (!data) {
        return;
      }
      const { tags } = data;
      expect(tags.length).toBe(3);
    });

    test("remove tags 1", async () => {
      const { data, errors } = await query.tag.removeMany(server, {
        where: { name: { startWith: "Tag" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.removeTags).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTags.count).toBe(2);
    });

    test("remove tags 2", async () => {
      const { data, errors } = await query.tag.removeMany(server, {
        where: {}
      });
      expect(errors).toBeUndefined();
      expect(data?.removeTags).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTags.count).toBe(1);
    });

    test("remove tags", async () => {
      const result1 = await query.tag.removeMany(server, {
        where: {}
      });
      expect(result1.errors).toBeUndefined();
      expect(result1.data?.removeTags).toBeDefined();
      if (!result1.data) {
        return;
      }
      expect(result1.data.removeTags.count).toBe(0);

      const result2 = await query.tag.findMany(server, {
        where: {}
      });
      expect(result2.errors).toBeUndefined();
      expect(result2.data?.tags).toBeDefined();
      if (!result2.data) {
        return;
      }
      const { tags } = result2.data;
      expect(tags.length).toBe(0);
    });
  });
});

import { createApp } from "@groovox/app";

import { enquiry, gql } from "./util";

import type { FastifyInstance } from "fastify";

const createTagCategoryQuery = gql`
  mutation createTagCategory($data: TagCategoryCreateOneInput!) {
    createTagCategory(data: $data) {
      id
      name
    }
  }
`;

const findTagCategoryQuery = gql`
  query tagCategory($where: TagCategoryFindOneInput!) {
    tagCategory(where: $where) {
      id
      name
    }
  }
`;

const findTagCategoriesQuery = gql`
  query tagCategories($where: TagCategoryFindManyInput!) {
    tagCategories(where: $where) {
      id
      name
    }
  }
`;

const removeTagCategoriesQuery = gql`
  mutation removeTagCategories($where: TagCategoryFindManyInput!) {
    removeTagCategories(where: $where) {
      count
    }
  }
`;

describe("plugin-graphql", () => {
  describe("tagCategory", () => {
    let server: FastifyInstance;
    let id: string;
    const name = "TagCategory 1";

    beforeAll(async () => {
      server = await createApp();
    });

    test("create one tagCategory", async () => {
      const { data, errors } = await enquiry(server, createTagCategoryQuery, {
        data: { name }
      });
      expect(errors).toBeUndefined();
      expect(data?.createTagCategory).toBeDefined();
      expect(data.createTagCategory.id).toBeDefined();
      expect(data.createTagCategory.name).toBe(name);
      id = data.createTagCategory.id;
    });

    test("find tagCategory", async () => {
      const { data, errors } = await enquiry(server, findTagCategoryQuery, {
        where: { id }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategory).toBeDefined();
      expect(data.tagCategory.id).toBe(id);
      expect(data.tagCategory.name).toBe(name);
    });

    test("find tagCategories", async () => {
      const { data, errors } = await enquiry(server, findTagCategoriesQuery, {
        where: { name: { startWith: "TagCategory" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tagCategories).toBeDefined();
      expect(data.tagCategories.length).toBe(1);
      const tagCategory = data.tagCategories[0];
      expect(tagCategory.id).toBe(id);
      expect(tagCategory.name).toBe(name);
    });

    test("remove tagCategories", async () => {
      const where = { name: { startWith: "TagCategory" } };
      const { data, errors } = await enquiry(server, removeTagCategoriesQuery, {
        where
      });
      expect(errors).toBeUndefined();
      expect(data?.removeTagCategories).toBeDefined();
      expect(data.removeTagCategories.count).toBe(1);

      const { data: data2, errors: errors2 } = await enquiry(
        server,
        findTagCategoriesQuery,
        { where }
      );
      expect(errors2).toBeUndefined();
      expect(data2?.tagCategories).toBeDefined();
      expect(data2.tagCategories.length).toBe(0);
    });
  });
});

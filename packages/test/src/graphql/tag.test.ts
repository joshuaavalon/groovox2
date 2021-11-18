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

const createTagQuery = gql`
  mutation createTag($data: TagCreateOneInput!) {
    createTag(data: $data) {
      id
      name
      category {
        id
        name
      }
    }
  }
`;

const findTagQuery = gql`
  query tag($where: TagFindOneInput!) {
    tag(where: $where) {
      id
      name
      category {
        id
        name
      }
    }
  }
`;

const findTagsQuery = gql`
  query tags($where: TagFindManyInput!) {
    tags(where: $where) {
      id
      name
      category {
        id
        name
      }
    }
  }
`;

const findTagsPaginationQuery = gql`
  query tags($pagination: Pagination!) {
    tags(pagination: $pagination) {
      id
      name
      category {
        id
        name
      }
    }
  }
`;

const removeTagsQuery = gql`
  mutation removeTags(
    $where: TagFindManyInput!
    $where2: TagCategoryFindManyInput!
  ) {
    removeTags(where: $where) {
      count
    }
    removeTagCategories(where: $where2) {
      count
    }
  }
`;

describe("plugin-graphql", () => {
  describe("tag", () => {
    let server: FastifyInstance;
    let id: string;
    let categoryId: string;
    const name = "Tag 1";
    const categoryName = "TagCategory 1";

    beforeAll(async () => {
      server = await createApp();
    });

    test("create one tag", async () => {
      const result = await enquiry(server, createTagCategoryQuery, {
        data: { name: categoryName }
      });
      categoryId = result.data.createTagCategory.id;
      const { data, errors } = await enquiry(server, createTagQuery, {
        data: { name, categoryId }
      });
      expect(errors).toBeUndefined();
      expect(data?.createTag).toBeDefined();
      expect(data.createTag.id).toBeDefined();
      expect(data.createTag.name).toBe(name);
      expect(data.createTag.category.id).toBe(categoryId);
      expect(data.createTag.category.name).toBe(categoryName);
      id = data.createTag.id;
    });

    test("find tag", async () => {
      const { data, errors } = await enquiry(server, findTagQuery, {
        where: { id }
      });
      expect(errors).toBeUndefined();
      expect(data?.tag).toBeDefined();
      expect(data.tag.id).toBe(id);
      expect(data.tag.name).toBe(name);
      expect(data.tag.category.id).toBe(categoryId);
      expect(data.tag.category.name).toBe(categoryName);
    });

    test("find tags", async () => {
      const { data, errors } = await enquiry(server, findTagsQuery, {
        where: { name: { startWith: "Tag" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.tags).toBeDefined();
      expect(data.tags.length).toBe(1);
      const tag = data.tags[0];
      expect(tag.id).toBe(id);
      expect(tag.name).toBe(name);
      expect(tag.category.id).toBe(categoryId);
      expect(tag.category.name).toBe(categoryName);
    });

    test("find tags pagination", async () => {
      const { errors } = await enquiry(server, findTagsPaginationQuery, {
        pagination: { take: -1 }
      });
      expect(errors).toBeDefined();
      console.log(errors);
    });

    test("remove tags", async () => {
      const where = { name: { startWith: "Tag" } };
      const { data, errors } = await enquiry(server, removeTagsQuery, {
        where,
        where2: { id: { equal: categoryId } }
      });
      expect(errors).toBeUndefined();
      expect(data?.removeTags).toBeDefined();
      expect(data.removeTags.count).toBe(1);
      expect(data?.removeTagCategories).toBeDefined();
      expect(data.removeTagCategories.count).toBe(1);

      const { data: data2, errors: errors2 } = await enquiry(
        server,
        findTagsQuery,
        { where }
      );
      expect(errors2).toBeUndefined();
      expect(data2?.tags).toBeDefined();
      expect(data2.tags.length).toBe(0);
    });
  });
});

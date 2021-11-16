import { createApp } from "@groovox/app";

import { enquiry, gql } from "./util";

import type { FastifyInstance } from "fastify";

const createStudioQuery = gql`
  mutation createStudio($data: StudioCreateOneInput!) {
    createStudio(data: $data) {
      id
      name
    }
  }
`;

const findStudioQuery = gql`
  query studio($where: StudioFindOneInput!) {
    studio(where: $where) {
      id
      name
    }
  }
`;

const findStudiosQuery = gql`
  query studios($where: StudioFindManyInput!) {
    studios(where: $where) {
      id
      name
    }
  }
`;

const removeStudiosQuery = gql`
  mutation removeStudios($where: StudioFindManyInput!) {
    removeStudios(where: $where) {
      count
    }
  }
`;

describe("plugin-graphql", () => {
  describe("studio", () => {
    let server: FastifyInstance;
    let studioId: string;
    const name = "Studio 1";

    beforeAll(async () => {
      server = await createApp();
    });

    test("create one studio", async () => {
      const { data, errors } = await enquiry(server, createStudioQuery, {
        data: { name }
      });
      expect(errors).toBeUndefined();
      expect(data?.createStudio).toBeDefined();
      expect(data.createStudio.id).toBeDefined();
      expect(data.createStudio.name).toBe(name);
      studioId = data.createStudio.id;
    });

    test("find studio", async () => {
      const { data, errors } = await enquiry(server, findStudioQuery, {
        where: { id: studioId }
      });
      expect(errors).toBeUndefined();
      expect(data?.studio).toBeDefined();
      expect(data.studio.id).toBe(studioId);
      expect(data.studio.name).toBe(name);
    });

    test("find studios", async () => {
      const { data, errors } = await enquiry(server, findStudiosQuery, {
        where: { name: { startWith: "Studio" } }
      });
      expect(errors).toBeUndefined();
      expect(data?.studios).toBeDefined();
      expect(data.studios.length).toBe(1);
      const studio = data.studios[0];
      expect(studio.id).toBe(studioId);
      expect(studio.name).toBe(name);
    });

    test("remove studios", async () => {
      const value = { name: { startWith: "Studio" } };
      const { data, errors } = await enquiry(server, removeStudiosQuery, {
        where: value
      });
      expect(errors).toBeUndefined();
      expect(data?.removeStudios).toBeDefined();
      expect(data.removeStudios.count).toBe(1);

      const { data: data2, errors: errors2 } = await enquiry(
        server,
        findStudiosQuery,
        {
          where: value
        }
      );
      expect(errors2).toBeUndefined();
      expect(data2?.studios).toBeDefined();
      expect(data2.studios.length).toBe(0);
    });
  });
});

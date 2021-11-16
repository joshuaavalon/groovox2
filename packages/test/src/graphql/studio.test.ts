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

describe("plugin-graphql", () => {
  describe("studio", () => {
    let server: FastifyInstance;

    beforeAll(async () => {
      server = await createApp();
    });

    test("create-one", async () => {
      const name = "Studio 1";
      const value = { name };
      const { data, errors } = await enquiry(server, createStudioQuery, {
        data: value
      });
      expect(errors).toBeUndefined();
      expect(data?.createStudio?.id).toBeDefined();
      expect(data?.createStudio?.name).toBe(name);
    });
  });
});

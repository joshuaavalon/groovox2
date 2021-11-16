import { createApp } from "@groovox/app";

import { enquiry, gql } from "./util";

describe("plugin-graphql", () => {
  describe("studio", async () => {
    const server = await createApp();
    test("create-one", async () => {
      const query = gql`
        query createStudio($data: StudioCreateOneInput!) {
          createStudio(data: $data) {
            id
            name
          }
        }
      `;
      const name = "Studio 1";
      const value = { name };
      const data = await enquiry(server, query, { data: value });
      expect(data?.createStudio?.id).toBeDefined();
      expect(data?.createStudio?.name).toBe(name);
    });
  });
});

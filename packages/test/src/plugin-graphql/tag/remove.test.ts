import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { cleanUp, createTagCategory } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("tag", () => {
    let sdk: Sdk;
    const createdIds: string[] = [];
    const createdCategoryIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
      const create = createTagCategory(sdk, createdIds, createdCategoryIds);
      await create(
        {
          name: "Remove Tag TagCategory Name 1",
          description: "Remove Tag TagCategory Desc 1"
        },
        [
          {
            name: "Remove Tag Name 1",
            description: "Remove Tag Desc 1"
          },
          {
            name: "Remove Tag Name 2",
            description: "Remove Tag Desc 2"
          },
          {
            name: "Remove Tag Name 3",
            description: "Remove Tag Desc 3"
          }
        ]
      );
    });

    test("remove by name", async () => {
      const { data, errors } = await sdk.removeTags({
        where: { name: { equal: "Remove Tag Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTags.count).toBe(1);
    });

    test("remove by id", async () => {
      const { data, errors } = await sdk.removeTags({
        where: { id: { equal: createdIds[1] } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTags.count).toBe(1);
    });

    afterAll(async () => {
      await cleanUp(sdk, createdCategoryIds);
    });
  });
});

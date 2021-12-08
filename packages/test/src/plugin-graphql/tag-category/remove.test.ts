import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { createTagCategory } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("tag category", () => {
    let sdk: Sdk;
    const createdIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
      const create = createTagCategory(sdk, createdIds);
      await create(
        {
          name: "Remove TagCategory Name 1",
          description: "Remove TagCategory Name 1"
        },
        [
          {
            name: "Remove TagCategory Name 1 Tag 1",
            description: "Remove TagCategory Name 1 Tag 1"
          },
          {
            name: "Remove TagCategory Name 1 Tag 2",
            description: "Remove TagCategory Name 1 Tag 2"
          },
          {
            name: "Remove TagCategory Name 1 Tag 3",
            description: "Remove TagCategory Name 1 Tag 3"
          }
        ]
      );
      await create({
        name: "Remove TagCategory Name 2",
        description: "Remove TagCategory Name 2"
      });
      await create({
        name: "Remove TagCategory Name 3",
        description: "Remove TagCategory Name 3"
      });
    });

    test("remove by name", async () => {
      const { data, errors } = await sdk.removeTagCategories({
        where: { name: { equal: "Remove TagCategory Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTagCategories.count).toBe(1);
    });

    test("remove by id", async () => {
      const { data, errors } = await sdk.removeTagCategories({
        where: { id: { in: createdIds } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeTagCategories.count).toBe(2);
      const tagResult = await sdk.tagCategories({
        where: { name: { startWith: "Remove TagCategory" } }
      });
      expect(tagResult.errors).toBeUndefined();
      expect(tagResult.data).toBeDefined();
      if (!tagResult.data) {
        return;
      }
      expect(tagResult.data.tagCategories.length).toBe(0);
    });
  });
});

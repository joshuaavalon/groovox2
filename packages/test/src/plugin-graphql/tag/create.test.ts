import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { cleanUp, createTagCategory } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("tag", () => {
    let sdk: Sdk;
    const name = "Create Tag Name 1";
    const description = "Create Tag Desc 1";
    const createdIds: string[] = [];
    const createdCategoryIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
      const create = createTagCategory(sdk, createdIds, createdCategoryIds);
      await create({
        name: "Create Tag TagCategory Name 1",
        description: "Create Tag TagCategory Desc 1"
      });
    });

    test("create", async () => {
      const { data, errors } = await sdk.createTag({
        data: { name, description, categoryId: createdCategoryIds[0] }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { createTag } = data;
      expect(createTag.id).toBeDefined();
      expect(createTag.name).toBe(name);
      expect(createTag.description).toBe(description);
      createdIds.push(createTag.id);
    });

    test("create duplicate", async () => {
      const { errors } = await sdk.createTag({
        data: { name, description, categoryId: createdCategoryIds[0] }
      });
      expect(errors).toBeDefined();
    });

    afterAll(async () => {
      await cleanUp(sdk, createdIds);
    });
  });
});

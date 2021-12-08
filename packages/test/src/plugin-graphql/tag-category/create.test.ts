import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { cleanUp } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("tag category", () => {
    let sdk: Sdk;
    const name = "Create TagCategory Name 1";
    const description = "Create TagCategory Desc 1";
    const createdIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
    });

    test("create", async () => {
      const { data, errors } = await sdk.createTagCategory({
        data: { name, description }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { createTagCategory } = data;
      expect(createTagCategory.id).toBeDefined();
      expect(createTagCategory.name).toBe(name);
      expect(createTagCategory.description).toBe(description);
      createdIds.push(createTagCategory.id);
    });

    test("create duplicate", async () => {
      const { errors } = await sdk.createTagCategory({
        data: { name, description }
      });
      expect(errors).toBeDefined();
    });

    afterAll(async () => {
      await cleanUp(sdk, createdIds);
    });
  });
});

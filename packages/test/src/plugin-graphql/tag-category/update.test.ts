import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { cleanUp, createTagCategory } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("tag category", () => {
    let sdk: Sdk;
    const name = "Update TagCategory Name 1";
    const description = "Update TagCategory Desc 1";

    const createdIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
      const create = createTagCategory(sdk, createdIds);

      await create({ name, description });
    });

    test("update", async () => {
      const { data, errors } = await sdk.updateTagCategory({
        where: { id: createdIds[0] },
        data: {
          name: "Update TagCategory Name 2",
          description: "Update TagCategory Desc 2"
        }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { updateTagCategory } = data;
      expect(updateTagCategory.id).toBeDefined();
      expect(updateTagCategory.name).toBe("Update TagCategory Name 2");
      expect(updateTagCategory.description).toBe("Update TagCategory Desc 2");
    });

    afterAll(async () => {
      await cleanUp(sdk, createdIds);
    });
  });
});

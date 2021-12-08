import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { cleanUp, createTagCategory } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("tag", () => {
    let sdk: Sdk;

    const name = "Update Tag Name 1";
    const description = "Update Tag Desc 1";

    const createdIds: string[] = [];
    const createdCategoryIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
      const create = createTagCategory(sdk, createdIds, createdCategoryIds);

      await create(
        {
          name: "Update Tag TagCategory Name 1",
          description: "Update Tag TagCategory Desc 1"
        },
        [{ name, description }]
      );
      await create({ name, description });
    });

    test("update", async () => {
      const { data, errors } = await sdk.updateTag({
        where: { id: createdIds[0] },
        data: {
          name: "Update Tag Name 2",
          description: "Update Tag Desc 2"
        }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { updateTag } = data;
      expect(updateTag.id).toBeDefined();
      expect(updateTag.name).toBe("Update Tag Name 2");
      expect(updateTag.description).toBe("Update Tag Desc 2");
    });

    afterAll(async () => {
      await cleanUp(sdk, createdCategoryIds);
    });
  });
});

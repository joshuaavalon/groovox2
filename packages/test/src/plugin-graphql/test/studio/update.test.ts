import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { cleanUp, createStudio } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let sdk: Sdk;
    const name = "Update Studio Name 1";
    const description = "Update Studio Desc 1";

    const createdIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
      const create = createStudio(sdk, createdIds);

      await create({ name, description });
    });

    test("update", async () => {
      const { data, errors } = await sdk.updateStudio({
        where: { id: createdIds[0] },
        data: {
          name: "Update Studio Name 2",
          description: "Update Studio Desc 2"
        }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { updateStudio } = data;
      expect(updateStudio.id).toBeDefined();
      expect(updateStudio.name).toBe("Update Studio Name 2");
      expect(updateStudio.description).toBe("Update Studio Desc 2");
    });

    afterAll(async () => {
      await cleanUp(sdk, createdIds);
    });
  });
});

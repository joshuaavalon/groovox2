import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { createStudio } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let sdk: Sdk;
    const createdIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
      const create = createStudio(sdk, createdIds);

      await create({
        name: "Remove Studio Name 1",
        description: "Remove Studio Desc 1"
      });

      await create({
        name: "Remove Studio Name 2",
        description: "Remove Studio Desc 2"
      });
    });

    test("remove by name", async () => {
      const { data, errors } = await sdk.removeStudios({
        where: { name: { equal: "Remove Studio Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeStudios.count).toBe(1);
    });

    test("remove by id", async () => {
      const { data, errors } = await sdk.removeStudios({
        where: { id: { equal: createdIds[1] } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      expect(data.removeStudios.count).toBe(1);
    });
  });
});

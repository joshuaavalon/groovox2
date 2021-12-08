import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { cleanUp } from "./utils";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let sdk: Sdk;
    const name = "Create Studio Name 1";
    const description = "Create Studio Desc 1";
    const createdIds: string[] = [];

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
    });

    test("create", async () => {
      const { data, errors } = await sdk.createStudio({
        data: { name, description }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { createStudio } = data;
      expect(createStudio.id).toBeDefined();
      expect(createStudio.name).toBe(name);
      expect(createStudio.description).toBe(description);
      createdIds.push(createStudio.id);
    });

    test("create duplicate", async () => {
      const { errors } = await sdk.createStudio({
        data: { name, description }
      });
      expect(errors).toBeDefined();
    });

    afterAll(async () => {
      await cleanUp(sdk, createdIds);
    });
  });
});

import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { cleanUp, createStudio } from "./utils";

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
        name: "Find Studio Name 1",
        description: "Find Studio Desc 1"
      });

      await create({
        name: "Find Studio Name 2",
        description: "Find Studio Desc 2"
      });

      await create({
        name: "Find Studio Name 3",
        description: "Find Studio Desc 3"
      });
    });

    test("find by id", async () => {
      const { data, errors } = await sdk.studio({
        where: { id: createdIds[0] }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data || !data.studio) {
        return;
      }
      const { studio } = data;
      expect(studio.id).toBe(createdIds[0]);
      expect(studio.name).toBe("Find Studio Name 1");
      expect(studio.description).toBe("Find Studio Desc 1");
    });

    test("find by name equal", async () => {
      const { data, errors } = await sdk.studios({
        where: { name: { equal: "Find Studio Name 1" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data || !data.studios) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(1);

      const studio = studios[0];
      expect(studio.id).toBe(createdIds[0]);
      expect(studio.name).toBe("Find Studio Name 1");
      expect(studio.description).toBe("Find Studio Desc 1");
    });

    test("find by name start with", async () => {
      const { data, errors } = await sdk.studios({
        where: { name: { startWith: "Find Studio" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(3);
    });

    test("find by name end with", async () => {
      const { data, errors } = await sdk.studios({
        where: { name: { endWith: "3" } }
      });
      expect(errors).toBeUndefined();
      expect(data).toBeDefined();
      if (!data) {
        return;
      }
      const { studios } = data;
      expect(studios.length).toBe(1);

      const studio = studios[0];
      expect(studio.id).toBe(createdIds[2]);
      expect(studio.name).toBe("Find Studio Name 3");
      expect(studio.description).toBe("Find Studio Desc 3");
    });

    afterAll(async () => {
      await cleanUp(sdk, createdIds);
    });
  });
});

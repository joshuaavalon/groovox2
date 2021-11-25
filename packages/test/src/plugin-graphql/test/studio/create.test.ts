import { createApp } from "@groovox/app";

import { query } from "../../query";
import { cleanUp } from "./utils";

import type { FastifyInstance } from "fastify";

describe("plugin-graphql", () => {
  describe("studio", () => {
    let server: FastifyInstance;
    const name = "Create Studio Name 1";
    const description = "Create Studio Desc 1";
    const createdIds: string[] = [];

    beforeAll(async () => {
      server = await createApp();
    });

    test("create", async () => {
      const { data, errors } = await query.studio.create(server, {
        data: { name, description }
      });
      expect(errors).toBeUndefined();
      expect(data?.createStudio).toBeDefined();
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
      const { errors } = await query.studio.create(server, {
        data: { name, description }
      });
      expect(errors).toBeDefined();
    });

    afterAll(async () => {
      await cleanUp(server, createdIds);
    });
  });
});

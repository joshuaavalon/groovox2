import { createApp } from "@groovox/app";
import { createSdk } from "@groovox/test-graphql-client";

import { testCreate, testCreateDuplicate } from "./create";
import {
  testFindById,
  testFindByNameEqual,
  testFindByNameStartWith
} from "./find";
import { testUpdate } from "./update";

import type { Sdk } from "@groovox/test-graphql-client";

describe("plugin-graphql", () => {
  describe("tagCategory", () => {
    let sdk: Sdk;

    beforeAll(async () => {
      const server = await createApp();
      sdk = createSdk(server);
    });

    test("create", async () => testCreate(sdk));
    test("create duplicate", async () => testCreateDuplicate(sdk));
    test("find by id", async () => testFindById(sdk));
    test("find by name equal", async () => testFindByNameEqual(sdk));
    test("find by name start with", async () => testFindByNameStartWith(sdk));
    test("update", async () => testUpdate(sdk));
  });
});

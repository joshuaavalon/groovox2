import { DateTime } from "luxon";

import type { Sdk } from "@groovox/test-graphql-client";

export const testUpdate = async (sdk: Sdk): Promise<void> => {
  const name = "Update Studio Name";
  const description = "Find Studio Desc";
  const createResult = await sdk.createStudio({
    data: { name, description }
  });
  expect(createResult.errors).toBeUndefined();
  expect(createResult.data).toBeDefined();
  if (!createResult.data) {
    return;
  }
  const { createStudio } = createResult.data;
  expect(createStudio.id).toBeDefined();
  expect(createStudio.name).toBe(name);
  expect(createStudio.description).toBe(description);

  const updateResult = await sdk.updateStudio({
    where: { id: createStudio.id },
    data: {
      name: "Update Studio Name 2",
      description: "Update Studio Desc 2"
    }
  });
  expect(updateResult.errors).toBeUndefined();
  expect(updateResult.data).toBeDefined();
  if (!updateResult.data) {
    return;
  }
  const { updateStudio } = updateResult.data;
  expect(updateStudio.id).toBe(createStudio.id);
  expect(updateStudio.name).toBe(name);
  expect(updateStudio.description).toBe(description);

  const oldUpdateAt = DateTime.fromISO(createStudio.updatedAt);
  const newUpdateAt = DateTime.fromISO(updateStudio.updatedAt);
  expect(newUpdateAt > oldUpdateAt).toBeTruthy();

  const removeResult = await sdk.removeStudios({
    where: { id: { equal: createStudio.id } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeStudios.count).toBe(1);
};

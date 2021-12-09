import { DateTime } from "luxon";

import type { Sdk } from "@groovox/test-graphql-client";

export const testUpdate = async (sdk: Sdk): Promise<void> => {
  const name = "Update Studio Name";
  const description = "Update Studio Desc";
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

  const name2 = "Update Studio Name 2";
  const description2 = "Update Studio Desc 2";
  const updateResult = await sdk.updateStudio({
    where: { id: createStudio.id },
    data: {
      name: name2,
      description: description2
    }
  });
  expect(updateResult.errors).toBeUndefined();
  expect(updateResult.data).toBeDefined();
  if (!updateResult.data) {
    return;
  }
  const { updateStudio } = updateResult.data;
  expect(updateStudio.id).toBe(createStudio.id);
  expect(updateStudio.name).toBe(name2);
  expect(updateStudio.description).toBe(description2);

  const oldUpdateAt = DateTime.fromISO(createStudio.updatedAt);
  const newUpdateAt = DateTime.fromISO(updateStudio.updatedAt);
  console.log({ oldUpdateAt, newUpdateAt });
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

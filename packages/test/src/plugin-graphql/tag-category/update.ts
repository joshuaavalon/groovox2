import { DateTime } from "luxon";

import type { Sdk } from "@groovox/test-graphql-client";

export const testUpdate = async (sdk: Sdk): Promise<void> => {
  const name = "Update TagCategory Name";
  const description = "Find TagCategory Desc";
  const createResult = await sdk.createTagCategory({
    data: { name, description }
  });
  expect(createResult.errors).toBeUndefined();
  expect(createResult.data).toBeDefined();
  if (!createResult.data) {
    return;
  }
  const { createTagCategory } = createResult.data;
  expect(createTagCategory.id).toBeDefined();
  expect(createTagCategory.name).toBe(name);
  expect(createTagCategory.description).toBe(description);

  const updateResult = await sdk.updateTagCategory({
    where: { id: createTagCategory.id },
    data: {
      name: "Update TagCategory Name 2",
      description: "Update TagCategory Desc 2"
    }
  });
  expect(updateResult.errors).toBeUndefined();
  expect(updateResult.data).toBeDefined();
  if (!updateResult.data) {
    return;
  }
  const { updateTagCategory } = updateResult.data;
  expect(updateTagCategory.id).toBe(createTagCategory.id);
  expect(updateTagCategory.name).toBe(name);
  expect(updateTagCategory.description).toBe(description);

  const oldUpdateAt = DateTime.fromISO(createTagCategory.updatedAt);
  const newUpdateAt = DateTime.fromISO(updateTagCategory.updatedAt);
  expect(newUpdateAt > oldUpdateAt).toBeTruthy();

  const removeResult = await sdk.removeTagCategories({
    where: { id: { equal: createTagCategory.id } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeTagCategories.count).toBe(1);
};

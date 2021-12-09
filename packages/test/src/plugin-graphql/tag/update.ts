import { DateTime } from "luxon";

import type { Sdk } from "@groovox/test-graphql-client";

export const testUpdate = async (sdk: Sdk): Promise<void> => {
  const name = "Update Tag Name";
  const description = "Update Tag Desc";

  const tagCategoryResult = await sdk.createTagCategory({
    data: { name, description }
  });
  expect(tagCategoryResult.errors).toBeUndefined();
  expect(tagCategoryResult.data).toBeDefined();
  if (!tagCategoryResult.data) {
    return;
  }
  const { createTagCategory } = tagCategoryResult.data;

  const createResult = await sdk.createTag({
    data: { name, description, categoryId: createTagCategory.id }
  });
  expect(createResult.errors).toBeUndefined();
  expect(createResult.data).toBeDefined();
  if (!createResult.data) {
    return;
  }
  const { createTag } = createResult.data;
  expect(createTag.id).toBeDefined();
  expect(createTag.name).toBe(name);
  expect(createTag.description).toBe(description);

  const name2 = "Update Tag Name 2";
  const description2 = "Update Tag Desc 2";
  const updateResult = await sdk.updateTag({
    where: { id: createTag.id },
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
  const { updateTag } = updateResult.data;
  expect(updateTag.id).toBe(createTag.id);
  expect(updateTag.name).toBe(name2);
  expect(updateTag.description).toBe(description2);

  const oldUpdateAt = DateTime.fromISO(createTag.updatedAt);
  const newUpdateAt = DateTime.fromISO(updateTag.updatedAt);
  console.log({
    oldUpdateAt: oldUpdateAt.toISO(),
    newUpdateAt: newUpdateAt.toISO()
  });
  expect(newUpdateAt > oldUpdateAt).toBeTruthy();

  const removeResult = await sdk.removeTags({
    where: { id: { equal: createTag.id } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeTags.count).toBe(1);

  const removeResult2 = await sdk.removeTagCategories({
    where: { id: { equal: createTagCategory.id } }
  });
  expect(removeResult2.errors).toBeUndefined();
  expect(removeResult2.data).toBeDefined();
  if (!removeResult2.data) {
    return;
  }
  expect(removeResult2.data.removeTagCategories.count).toBe(1);
};

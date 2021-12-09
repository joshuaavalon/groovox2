import type { Sdk } from "@groovox/test-graphql-client";

export const testCreate = async (sdk: Sdk): Promise<void> => {
  const name = "Create Tag Name";
  const description = "Create Tag Desc";

  const tagCategoryResult = await sdk.createTagCategory({
    data: { name, description }
  });
  expect(tagCategoryResult.errors).toBeUndefined();
  expect(tagCategoryResult.data).toBeDefined();
  if (!tagCategoryResult.data) {
    return;
  }
  const { createTagCategory } = tagCategoryResult.data;

  const { data, errors } = await sdk.createTag({
    data: {
      name,
      description,
      categoryId: createTagCategory.id
    }
  });
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();
  if (!data) {
    return;
  }
  const { createTag } = data;
  expect(createTag.id).toBeDefined();
  expect(createTag.name).toBe(name);
  expect(createTag.description).toBe(description);

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

export const testCreateDuplicate = async (sdk: Sdk): Promise<void> => {
  const name = "Create Duplicate Tag Name";
  const description = "Create Duplicate Tag Desc";

  const tagCategoryResult = await sdk.createTagCategory({
    data: { name, description }
  });
  expect(tagCategoryResult.errors).toBeUndefined();
  expect(tagCategoryResult.data).toBeDefined();
  if (!tagCategoryResult.data) {
    return;
  }
  const { createTagCategory } = tagCategoryResult.data;

  const createResult1 = await sdk.createTag({
    data: { name, description, categoryId: createTagCategory.id }
  });
  expect(createResult1.errors).toBeUndefined();
  expect(createResult1.data).toBeDefined();
  if (!createResult1.data) {
    return;
  }
  const { createTag } = createResult1.data;
  expect(createTag.id).toBeDefined();
  expect(createTag.name).toBe(name);
  expect(createTag.description).toBe(description);

  const createResult2 = await sdk.createTag({
    data: { name, description, categoryId: createTagCategory.id }
  });
  expect(createResult2.errors).toBeDefined();

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

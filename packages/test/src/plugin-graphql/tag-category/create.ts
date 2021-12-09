import type { Sdk } from "@groovox/test-graphql-client";

export const testCreate = async (sdk: Sdk): Promise<void> => {
  const name = "Create TagCategory Name";
  const description = "Create TagCategory Desc";
  const { data, errors } = await sdk.createTagCategory({
    data: { name, description }
  });
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();
  if (!data) {
    return;
  }
  const { createTagCategory } = data;
  expect(createTagCategory.id).toBeDefined();
  expect(createTagCategory.name).toBe(name);
  expect(createTagCategory.description).toBe(description);

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

export const testCreateDuplicate = async (sdk: Sdk): Promise<void> => {
  const name = "Create Duplicate TagCategory Name";
  const description = "Create Duplicate TagCategory Desc";
  const createResult1 = await sdk.createTagCategory({
    data: { name, description }
  });
  expect(createResult1.errors).toBeUndefined();
  expect(createResult1.data).toBeDefined();
  if (!createResult1.data) {
    return;
  }
  const { createTagCategory } = createResult1.data;
  expect(createTagCategory.id).toBeDefined();
  expect(createTagCategory.name).toBe(name);
  expect(createTagCategory.description).toBe(description);

  const createResult2 = await sdk.createTagCategory({
    data: { name, description }
  });
  expect(createResult2.errors).toBeDefined();

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

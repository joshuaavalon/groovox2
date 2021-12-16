import type { Sdk } from "@groovox/test-graphql-client";

export const testFindById = async (sdk: Sdk): Promise<void> => {
  const name = "Find TagCategory By Id Name";
  const description = "Find TagCategory By Id Desc";
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

  const findResult = await sdk.findTagCategory({
    where: { id: createTagCategory.id }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data || !findResult.data.findTagCategory) {
    return;
  }
  const { findTagCategory } = findResult.data;
  expect(findTagCategory.id).toBe(createTagCategory.id);
  expect(findTagCategory.name).toBe(name);
  expect(findTagCategory.description).toBe(description);

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

export const testFindByNameEqual = async (sdk: Sdk): Promise<void> => {
  const name = "Find TagCategory By Name Equal Name";
  const description = "Find TagCategory By Name Equal Desc";
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

  const findResult = await sdk.findTagCategories({
    where: { name: { equal: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { findTagCategories } = findResult.data;
  expect(findTagCategories.length).toBe(1);

  const tagCategory = findTagCategories[0];
  expect(tagCategory.id).toBe(createTagCategory.id);
  expect(tagCategory.name).toBe(name);
  expect(tagCategory.description).toBe(description);

  const removeResult = await sdk.removeTagCategories({
    where: { name: { equal: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeTagCategories.count).toBe(1);
};

export const testFindByNameStartWith = async (sdk: Sdk): Promise<void> => {
  const name = "Find TagCategory By Name Start With Name";
  const description = "Find TagCategory By Start With Desc";

  for (let i = 1; i < 4; i++) {
    const suffix = " " + i;
    const createResult = await sdk.createTagCategory({
      data: { name: name + suffix, description: description + suffix }
    });
    expect(createResult.errors).toBeUndefined();
    expect(createResult.data).toBeDefined();
    if (!createResult.data) {
      return;
    }
    const { createTagCategory } = createResult.data;
    expect(createTagCategory.id).toBeDefined();
    expect(createTagCategory.name).toBe(name + suffix);
    expect(createTagCategory.description).toBe(description + suffix);
  }

  const findResult = await sdk.findTagCategories({
    where: { name: { startWith: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { findTagCategories } = findResult.data;
  expect(findTagCategories.length).toBe(3);

  for (let i = 0; i < 3; i++) {
    const tagCategory = findTagCategories[i];
    const suffix = " " + (i + 1);
    expect(tagCategory.name).toBe(name + suffix);
    expect(tagCategory.description).toBe(description + suffix);
  }

  const removeResult = await sdk.removeTagCategories({
    where: { name: { startWith: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeTagCategories.count).toBe(3);
};

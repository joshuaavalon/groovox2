import type { Sdk } from "@groovox/test-graphql-client";

export const testFindById = async (sdk: Sdk): Promise<void> => {
  const name = "Find Tag By Id Name";
  const description = "Find Tag By Id Desc";

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

  const findResult = await sdk.tag({
    where: { id: createTag.id }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data || !findResult.data.tag) {
    return;
  }
  const { tag } = findResult.data;
  expect(tag.id).toBe(createTag.id);
  expect(tag.name).toBe(name);
  expect(tag.description).toBe(description);

  const removeResult = await sdk.removeTags({
    where: { id: { equal: createTag.id } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeTags.count).toBe(1);
};

export const testFindByNameEqual = async (sdk: Sdk): Promise<void> => {
  const name = "Find Tag By Name Equal Name";
  const description = "Find Tag By Name Equal Desc";

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

  const findResult = await sdk.tags({
    where: { name: { equal: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { tags } = findResult.data;
  expect(tags.length).toBe(1);

  const tag = tags[0];
  expect(tag.id).toBe(createTag.id);
  expect(tag.name).toBe(name);
  expect(tag.description).toBe(description);

  const removeResult = await sdk.removeTags({
    where: { name: { equal: name } }
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

export const testFindByNameStartWith = async (sdk: Sdk): Promise<void> => {
  const name = "Find Tag By Name Start With Name";
  const description = "Find Tag By Start With Desc";

  const tagCategoryResult = await sdk.createTagCategory({
    data: { name, description }
  });
  expect(tagCategoryResult.errors).toBeUndefined();
  expect(tagCategoryResult.data).toBeDefined();
  if (!tagCategoryResult.data) {
    return;
  }
  const { createTagCategory } = tagCategoryResult.data;

  for (let i = 1; i < 4; i++) {
    const suffix = " " + i;
    const createResult = await sdk.createTag({
      data: {
        name: name + suffix,
        description: description + suffix,
        categoryId: createTagCategory.id
      }
    });
    expect(createResult.errors).toBeUndefined();
    expect(createResult.data).toBeDefined();
    if (!createResult.data) {
      return;
    }
    const { createTag } = createResult.data;
    expect(createTag.id).toBeDefined();
    expect(createTag.name).toBe(name + suffix);
    expect(createTag.description).toBe(description + suffix);
  }

  const findResult = await sdk.tags({
    where: { name: { startWith: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { tags } = findResult.data;
  expect(tags.length).toBe(3);

  for (let i = 0; i < 3; i++) {
    const tag = tags[i];
    const suffix = " " + i + 1;
    expect(tag.name).toBe(name + suffix);
    expect(tag.description).toBe(description + suffix);
  }

  const removeResult = await sdk.removeTags({
    where: { name: { startWith: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeTags.count).toBe(3);

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

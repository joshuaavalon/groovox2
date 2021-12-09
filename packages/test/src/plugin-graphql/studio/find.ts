import type { Sdk } from "@groovox/test-graphql-client";

export const testFindById = async (sdk: Sdk): Promise<void> => {
  const name = "Find Studio By Id Name";
  const description = "Find Studio By Id Desc";
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

  const findResult = await sdk.studio({
    where: { id: createStudio.id }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data || !findResult.data.studio) {
    return;
  }
  const { studio } = findResult.data;
  expect(studio.id).toBe(createStudio.id);
  expect(studio.name).toBe(name);
  expect(studio.description).toBe(description);

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

export const testFindByNameEqual = async (sdk: Sdk): Promise<void> => {
  const name = "Find Studio By Name Equal Name";
  const description = "Find Studio By Name Equal Desc";
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

  const findResult = await sdk.studios({
    where: { name: { equal: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { studios } = findResult.data;
  expect(studios.length).toBe(1);

  const studio = studios[0];
  expect(studio.id).toBe(createStudio.id);
  expect(studio.name).toBe(name);
  expect(studio.description).toBe(description);

  const removeResult = await sdk.removeStudios({
    where: { name: { equal: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeStudios.count).toBe(1);
};

export const testFindByNameStartWith = async (sdk: Sdk): Promise<void> => {
  const name = "Find Studio By Name Start With Name";
  const description = "Find Studio By Start With Desc";

  for (let i = 1; i < 4; i++) {
    const suffix = " " + i;
    const createResult = await sdk.createStudio({
      data: { name: name + suffix, description: description + suffix }
    });
    expect(createResult.errors).toBeUndefined();
    expect(createResult.data).toBeDefined();
    if (!createResult.data) {
      return;
    }
    const { createStudio } = createResult.data;
    expect(createStudio.id).toBeDefined();
    expect(createStudio.name).toBe(name + suffix);
    expect(createStudio.description).toBe(description + suffix);
  }

  const findResult = await sdk.studios({
    where: { name: { startWith: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { studios } = findResult.data;
  expect(studios.length).toBe(3);

  for (let i = 0; i < 3; i++) {
    const studio = studios[i];
    const suffix = " " + (i + 1);
    expect(studio.name).toBe(name + suffix);
    expect(studio.description).toBe(description + suffix);
  }

  const removeResult = await sdk.removeStudios({
    where: { name: { startWith: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeStudios.count).toBe(3);
};

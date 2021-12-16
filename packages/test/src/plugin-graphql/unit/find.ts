import type { Sdk } from "@groovox/test-graphql-client";

export const testFindById = async (sdk: Sdk): Promise<void> => {
  const name = "Find Unit By Id Name";
  const description = "Find Unit By Id Desc";
  const createResult = await sdk.createUnit({
    data: { name, description }
  });
  expect(createResult.errors).toBeUndefined();
  expect(createResult.data).toBeDefined();
  if (!createResult.data) {
    return;
  }
  const { createUnit } = createResult.data;
  expect(createUnit.id).toBeDefined();
  expect(createUnit.name).toBe(name);
  expect(createUnit.description).toBe(description);

  const findResult = await sdk.findUnit({
    where: { id: createUnit.id }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data || !findResult.data.findUnit) {
    return;
  }
  const { findUnit } = findResult.data;
  expect(findUnit.id).toBe(createUnit.id);
  expect(findUnit.name).toBe(name);
  expect(findUnit.description).toBe(description);

  const removeResult = await sdk.removeUnits({
    where: { id: { equal: createUnit.id } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeUnits.count).toBe(1);
};

export const testFindByNameEqual = async (sdk: Sdk): Promise<void> => {
  const name = "Find Unit By Name Equal Name";
  const description = "Find Unit By Name Equal Desc";
  const createResult = await sdk.createUnit({
    data: { name, description }
  });
  expect(createResult.errors).toBeUndefined();
  expect(createResult.data).toBeDefined();
  if (!createResult.data) {
    return;
  }
  const { createUnit } = createResult.data;
  expect(createUnit.id).toBeDefined();
  expect(createUnit.name).toBe(name);
  expect(createUnit.description).toBe(description);

  const findResult = await sdk.findUnits({
    where: { name: { equal: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { findUnits } = findResult.data;
  expect(findUnits.length).toBe(1);

  const unit = findUnits[0];
  expect(unit.id).toBe(createUnit.id);
  expect(unit.name).toBe(name);
  expect(unit.description).toBe(description);

  const removeResult = await sdk.removeUnits({
    where: { name: { equal: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeUnits.count).toBe(1);
};

export const testFindByNameStartWith = async (sdk: Sdk): Promise<void> => {
  const name = "Find Unit By Name Start With Name";
  const description = "Find Unit By Start With Desc";

  for (let i = 1; i < 4; i++) {
    const suffix = " " + i;
    const createResult = await sdk.createUnit({
      data: { name: name + suffix, description: description + suffix }
    });
    expect(createResult.errors).toBeUndefined();
    expect(createResult.data).toBeDefined();
    if (!createResult.data) {
      return;
    }
    const { createUnit } = createResult.data;
    expect(createUnit.id).toBeDefined();
    expect(createUnit.name).toBe(name + suffix);
    expect(createUnit.description).toBe(description + suffix);
  }

  const findResult = await sdk.findUnits({
    where: { name: { startWith: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { findUnits } = findResult.data;
  expect(findUnits.length).toBe(3);

  for (let i = 0; i < 3; i++) {
    const unit = findUnits[i];
    const suffix = " " + (i + 1);
    expect(unit.name).toBe(name + suffix);
    expect(unit.description).toBe(description + suffix);
  }

  const removeResult = await sdk.removeUnits({
    where: { name: { startWith: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeUnits.count).toBe(3);
};

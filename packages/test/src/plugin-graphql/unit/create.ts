import type { Sdk } from "@groovox/test-graphql-client";

export const testCreate = async (sdk: Sdk): Promise<void> => {
  const name = "Create Unit Name";
  const description = "Create Unit Desc";
  const { data, errors } = await sdk.createUnit({
    data: { name, description }
  });
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();
  if (!data) {
    return;
  }
  const { createUnit } = data;
  expect(createUnit.id).toBeDefined();
  expect(createUnit.name).toBe(name);
  expect(createUnit.description).toBe(description);

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

export const testCreateDuplicate = async (sdk: Sdk): Promise<void> => {
  const name = "Create Duplicate Unit Name";
  const description = "Create Duplicate Unit Desc";
  const createResult1 = await sdk.createUnit({
    data: { name, description }
  });
  expect(createResult1.errors).toBeUndefined();
  expect(createResult1.data).toBeDefined();
  if (!createResult1.data) {
    return;
  }
  const { createUnit } = createResult1.data;
  expect(createUnit.id).toBeDefined();
  expect(createUnit.name).toBe(name);
  expect(createUnit.description).toBe(description);

  const createResult2 = await sdk.createUnit({
    data: { name, description }
  });
  expect(createResult2.errors).toBeDefined();

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

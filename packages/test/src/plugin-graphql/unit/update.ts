import { DateTime } from "luxon";

import type { Sdk } from "@groovox/test-graphql-client";

export const testUpdate = async (sdk: Sdk): Promise<void> => {
  const name = "Update Unit Name";
  const description = "Update Unit Desc";
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

  const name2 = "Update Unit Name 2";
  const description2 = "Update Unit Desc 2";
  const updateResult = await sdk.updateUnit({
    where: { id: createUnit.id },
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
  const { updateUnit } = updateResult.data;
  expect(updateUnit.id).toBe(createUnit.id);
  expect(updateUnit.name).toBe(name2);
  expect(updateUnit.description).toBe(description2);

  const oldUpdateAt = DateTime.fromISO(createUnit.updatedAt);
  const newUpdateAt = DateTime.fromISO(updateUnit.updatedAt);
  expect(newUpdateAt > oldUpdateAt).toBeTruthy();

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

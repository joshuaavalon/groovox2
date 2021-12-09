import { DateTime } from "luxon";

import type { Sdk } from "@groovox/test-graphql-client";

export const testUpdate = async (sdk: Sdk): Promise<void> => {
  const nameFirst = "Update Person First Name";
  const nameMiddle = "Update Person Middle Name";
  const nameLast = "Update Person Last Name";
  const nameSort = "Update Person Sort Name";
  const sex = "M";
  const description = "Create Person Desc";
  const createResult = await sdk.createPerson({
    data: { nameFirst, nameMiddle, nameLast, nameSort, sex, description }
  });
  expect(createResult.errors).toBeUndefined();
  expect(createResult.data).toBeDefined();
  if (!createResult.data) {
    return;
  }
  const { createPerson } = createResult.data;
  expect(createPerson.id).toBeDefined();
  expect(createPerson.nameFirst).toBe(nameFirst);
  expect(createPerson.nameMiddle).toBe(nameMiddle);
  expect(createPerson.nameLast).toBe(nameLast);
  expect(createPerson.nameSort).toBe(nameSort);
  expect(createPerson.sex).toBe(sex);
  expect(createPerson.description).toBe(description);

  const nameFirst2 = "Update Person First Name 2";
  const description2 = "Update Person Desc 2";
  const updateResult = await sdk.updatePerson({
    where: { id: createPerson.id },
    data: {
      nameFirst: nameFirst2,
      description: description2
    }
  });
  expect(updateResult.errors).toBeUndefined();
  expect(updateResult.data).toBeDefined();
  if (!updateResult.data) {
    return;
  }
  const { updatePerson } = updateResult.data;
  expect(updatePerson.id).toBe(createPerson.id);
  expect(updatePerson.nameFirst).toBe(nameFirst2);
  expect(updatePerson.nameMiddle).toBe(nameMiddle);
  expect(updatePerson.nameLast).toBe(nameLast);
  expect(updatePerson.nameSort).toBe(nameSort);
  expect(updatePerson.sex).toBe(sex);
  expect(updatePerson.description).toBe(description2);

  const oldUpdateAt = DateTime.fromISO(createPerson.updatedAt);
  const newUpdateAt = DateTime.fromISO(updatePerson.updatedAt);
  expect(newUpdateAt > oldUpdateAt).toBeTruthy();

  const removeResult = await sdk.removePeople({
    where: { id: { equal: createPerson.id } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removePeople.count).toBe(1);
};

import type { Sdk } from "@groovox/test-graphql-client";

export const testCreate = async (sdk: Sdk): Promise<void> => {
  const nameFirst = "Create Person First Name";
  const nameMiddle = "Create Person Middle Name";
  const nameLast = "Create Person Last Name";
  const nameSort = "Create Person Sort Name";
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

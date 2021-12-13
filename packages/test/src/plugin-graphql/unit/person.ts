import type { Sdk, Types } from "@groovox/test-graphql-client";

type CreatePerson = Types.CreatePersonMutation["createPerson"];

export const testPerson = async (sdk: Sdk): Promise<void> => {
  const unit = {
    name: "Create Unit Name With Person",
    description: "Create Unit Desc With Person"
  };
  const createUnitResult = await sdk.createUnit({
    data: unit
  });
  expect(createUnitResult.errors).toBeUndefined();
  expect(createUnitResult.data).toBeDefined();
  if (!createUnitResult.data) {
    return;
  }
  const { createUnit } = createUnitResult.data;
  expect(createUnit.id).toBeDefined();
  expect(createUnit.name).toBe(unit.name);
  expect(createUnit.description).toBe(unit.description);

  const people: CreatePerson[] = [];

  for (let i = 1; i < 4; i++) {
    const person = {
      nameFirst: "Create Person With Unit First Name " + i,
      nameMiddle: "Create Person With Unit Middle Name " + i,
      nameLast: "Create Person With Unit Last Name " + i,
      nameSort: "Create Person With Unit Sort Name " + i,
      sex: "M",
      description: "Create Person With Unit Desc " + i
    };
    const createPersonResult = await sdk.createPerson({
      data: person
    });
    expect(createPersonResult.errors).toBeUndefined();
    expect(createPersonResult.data).toBeDefined();
    if (!createPersonResult.data) {
      return;
    }
    const { createPerson } = createPersonResult.data;
    expect(createPerson.id).toBeDefined();
    expect(createPerson.nameFirst).toBe(createPerson.nameFirst);
    expect(createPerson.nameMiddle).toBe(createPerson.nameMiddle);
    expect(createPerson.nameLast).toBe(createPerson.nameLast);
    expect(createPerson.nameSort).toBe(createPerson.nameSort);
    expect(createPerson.sex).toBe(createPerson.sex);
    expect(createPerson.description).toBe(createPerson.description);
    people.push(createPerson);
  }

  const updateResult = await sdk.updateUnit({
    where: { id: createUnit.id },
    data: {
      memberIds: [people[0].id, people[1].id]
    }
  });
  expect(updateResult.errors).toBeUndefined();
  expect(updateResult.data).toBeDefined();
  if (!updateResult.data) {
    return;
  }
  const { updateUnit } = updateResult.data;
  expect(updateUnit.id).toBe(createUnit.id);
  expect(updateUnit.members.length).toBe(2);

  const removeUnitResult = await sdk.removeUnits({
    where: { id: { equal: createUnit.id } }
  });
  expect(removeUnitResult.errors).toBeUndefined();
  expect(removeUnitResult.data).toBeDefined();
  if (!removeUnitResult.data) {
    return;
  }
  expect(removeUnitResult.data.removeUnits.count).toBe(1);

  const removePersonResult = await sdk.removePeople({
    where: { id: { in: people.map(p => p.id) } }
  });
  expect(removePersonResult.errors).toBeUndefined();
  expect(removePersonResult.data).toBeDefined();
  if (!removePersonResult.data) {
    return;
  }
  expect(removePersonResult.data.removePeople.count).toBe(3);
};

import type { Sdk, Types } from "@groovox/test-graphql-client";

type CreateUnit = Types.CreateUnitMutation["createUnit"];

export const testUnit = async (sdk: Sdk): Promise<void> => {
  const person = {
    nameFirst: "Create Person With Unit First Name",
    nameMiddle: "Create Person With Unit Middle Name",
    nameLast: "Create Person With Unit Last Name",
    nameSort: "Create Person With Unit Sort Name",
    sex: "M",
    description: "Create Person With Unit Desc"
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

  const units: CreateUnit[] = [];

  for (let i = 1; i < 4; i++) {
    const unit = {
      name: "Create Unit Name With Person " + i,
      description: "Create Unit Desc With Person " + i
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
    units.push(createUnit);
  }

  const updateResult = await sdk.updatePerson({
    where: { id: createPerson.id },
    data: {
      unitIds: [units[0].id, units[1].id]
    }
  });
  expect(updateResult.errors).toBeUndefined();
  expect(updateResult.data).toBeDefined();
  if (!updateResult.data) {
    return;
  }
  const { updatePerson } = updateResult.data;
  expect(updatePerson.id).toBe(createPerson.id);
  expect(updatePerson.units.length).toBe(2);

  const removePersonResult = await sdk.removePeople({
    where: { id: { equal: createPerson.id } }
  });
  expect(removePersonResult.errors).toBeUndefined();
  expect(removePersonResult.data).toBeDefined();
  if (!removePersonResult.data) {
    return;
  }
  expect(removePersonResult.data.removePeople.count).toBe(1);

  const removeUnitResult = await sdk.removeUnits({
    where: { id: { in: units.map(u => u.id) } }
  });
  expect(removeUnitResult.errors).toBeUndefined();
  expect(removeUnitResult.data).toBeDefined();
  if (!removeUnitResult.data) {
    return;
  }
  expect(removeUnitResult.data.removeUnits.count).toBe(3);
};

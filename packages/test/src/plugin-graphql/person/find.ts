import type { Sdk } from "@groovox/test-graphql-client";

export const testFindById = async (sdk: Sdk): Promise<void> => {
  const description = "Find Person By Id Desc";
  const nameFirst = "Find Person By Id First Name";
  const nameMiddle = "Find Person By Id Middle Name";
  const nameLast = "Find Person By Id Last Name";
  const nameSort = "Find Person By Id Sort Name";
  const sex = "M";
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

  const findResult = await sdk.person({
    where: { id: createPerson.id }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data || !findResult.data.person) {
    return;
  }
  const { person } = findResult.data;
  expect(person.id).toBe(createPerson.id);
  expect(person.nameFirst).toBe(nameFirst);
  expect(person.nameMiddle).toBe(nameMiddle);
  expect(person.nameLast).toBe(nameLast);
  expect(person.nameSort).toBe(nameSort);
  expect(person.sex).toBe(sex);
  expect(person.description).toBe(description);

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

export const testFindByNameEqual = async (sdk: Sdk): Promise<void> => {
  const nameFirst = "Find Person By Name Equal First Name";
  const nameMiddle = "Find Person By Name Equal Middle Name";
  const nameLast = "Find Person By Name Equal Last Name";
  const nameSort = "Find Person By Name Equal Sort Name";
  const sex = "M";
  const description = "Find Person By Name Equal Desc";
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

  const findResult = await sdk.people({
    where: { nameFirst: { equal: nameFirst } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { people } = findResult.data;
  expect(people.length).toBe(1);

  const person = people[0];
  expect(person.id).toBe(createPerson.id);
  expect(person.nameFirst).toBe(nameFirst);
  expect(person.nameMiddle).toBe(nameMiddle);
  expect(person.nameLast).toBe(nameLast);
  expect(person.nameSort).toBe(nameSort);
  expect(person.sex).toBe(sex);
  expect(person.description).toBe(description);

  const removeResult = await sdk.removePeople({
    where: { nameFirst: { equal: nameFirst } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removePeople.count).toBe(1);
};

export const testFindByNameStartWith = async (sdk: Sdk): Promise<void> => {
  const nameFirst = "Find Person By Name Start First Name";
  const nameMiddle = "Find Person By Name Start Middle Name";
  const nameLast = "Find Person By Name Start Last Name";
  const nameSort = "Find Person By Name Start Sort Name";
  const sex = "M";
  const description = "Find Person By Name Start Desc";

  for (let i = 1; i < 4; i++) {
    const suffix = " " + i;
    const createResult = await sdk.createPerson({
      data: {
        nameFirst: nameFirst + suffix,
        nameMiddle: nameMiddle + suffix,
        nameLast: nameLast + suffix,
        nameSort: nameSort + suffix,
        sex,
        description: description + suffix
      }
    });
    expect(createResult.errors).toBeUndefined();
    expect(createResult.data).toBeDefined();
    if (!createResult.data) {
      return;
    }
    const { createPerson } = createResult.data;
    expect(createPerson.id).toBeDefined();
    expect(createPerson.nameFirst).toBe(nameFirst + suffix);
    expect(createPerson.nameMiddle).toBe(nameMiddle + suffix);
    expect(createPerson.nameLast).toBe(nameLast + suffix);
    expect(createPerson.nameSort).toBe(nameSort + suffix);
    expect(createPerson.sex).toBe(sex);
    expect(createPerson.description).toBe(description + suffix);
  }

  const findResult = await sdk.people({
    where: { nameFirst: { startWith: nameFirst } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { people } = findResult.data;
  expect(people.length).toBe(3);

  for (let i = 0; i < 3; i++) {
    const person = people[i];
    const suffix = " " + (i + 1);
    expect(person.nameFirst).toBe(nameFirst + suffix);
    expect(person.nameMiddle).toBe(nameMiddle + suffix);
    expect(person.nameLast).toBe(nameLast + suffix);
    expect(person.nameSort).toBe(nameSort + suffix);
    expect(person.sex).toBe(sex);
    expect(person.description).toBe(description + suffix);
  }

  const removeResult = await sdk.removePeople({
    where: { nameFirst: { startWith: nameFirst } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removePeople.count).toBe(3);
};

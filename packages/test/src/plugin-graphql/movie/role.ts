import type { Sdk, Types } from "@groovox/test-graphql-client";

const createPerson = async (
  sdk: Sdk,
  index: number
): Promise<Types.CreatePersonMutation["createPerson"]> => {
  const nameFirst = "Create Person First Name " + index;
  const nameMiddle = "Create Person Middle Name " + index;
  const nameLast = "Create Person Last Name " + index;
  const nameSort = "Create Person Sort Name " + index;
  const sex = "M";
  const description = "Create Person Desc " + index;
  const createResult = await sdk.createPerson({
    data: { nameFirst, nameMiddle, nameLast, nameSort, sex, description }
  });
  expect(createResult.errors).toBeUndefined();
  expect(createResult.data).toBeDefined();
  if (!createResult.data) {
    throw new Error();
  }
  const { createPerson } = createResult.data;
  expect(createPerson.id).toBeDefined();
  expect(createPerson.nameFirst).toBe(nameFirst + index);
  expect(createPerson.nameMiddle).toBe(nameMiddle + index);
  expect(createPerson.nameLast).toBe(nameLast + index);
  expect(createPerson.nameSort).toBe(nameSort + index);
  expect(createPerson.sex).toBe(sex);
  expect(createPerson.description).toBe(description + index);
  return createPerson;
};

export const testRole = async (sdk: Sdk): Promise<void> => {
  const [person1, person2] = await Promise.all([
    createPerson(sdk, 1),
    createPerson(sdk, 2)
  ]);
  const name = "Create Movie With Role Name";
  const nameSort = "Create Movie With Role Name Sort";
  const contentRating = "TV";
  const airedDate = "2020-01-01";
  const tagline = "Create Movie With Role Tagline";
  const rating = 5;
  const description = "Create Movie With Role Desc";
  const alias = [
    "Create Movie With Role Alias 1",
    "Create Movie With Role Alias 2",
    "Create Movie With Role Alias 3"
  ];
  const roles = [
    {
      type: "Movie Role Type",
      role: "Movie Role A",
      personId: person1.id
    },
    {
      type: "Movie Role Type",
      role: "Movie Role B",
      personId: person2.id
    }
  ];
  const createResult = await sdk.createMovie({
    data: {
      name,
      nameSort,
      contentRating,
      airedDate,
      tagline,
      rating,
      description,
      alias,
      roles
    }
  });
  expect(createResult.errors).toBeUndefined();
  expect(createResult.data).toBeDefined();
  if (!createResult.data) {
    return;
  }
  const { createMovie } = createResult.data;
  expect(createMovie.id).toBeDefined();
  expect(createMovie.name).toBe(name);
  expect(createMovie.nameSort).toBe(nameSort);
  expect(createMovie.contentRating).toBe(contentRating);
  expect(createMovie.airedDate).toBe(airedDate);
  expect(createMovie.tagline).toBe(tagline);
  expect(createMovie.rating).toBe(rating);
  expect(createMovie.description).toBe(description);
  expect(createMovie.alias).toStrictEqual(alias);
  expect(createMovie.roles.length).toBe(2);
  for (let i = 0; i < createMovie.roles.length; i++) {
    const role = createMovie.roles[i];
    expect(role.type).toStrictEqual(roles[i].type);
    expect(role.role).toStrictEqual(roles[i].role);
    expect(role.person.id).toStrictEqual(roles[i].personId);
  }

  const roles2 = [
    {
      type: "Movie Role Type",
      role: "Movie Role C",
      personId: person1.id
    },
    {
      type: "Movie Role Type",
      role: "Movie Role D",
      personId: person2.id
    }
  ];

  const updateResult = await sdk.updateMovie({
    where: { id: createMovie.id },
    data: { roles: roles2 }
  });
  expect(updateResult.errors).toBeUndefined();
  expect(updateResult.data).toBeDefined();
  if (!updateResult.data) {
    return;
  }
  const { updateMovie } = updateResult.data;
  expect(updateMovie.id).toBe(createMovie.id);
  expect(updateMovie.roles.length).toBe(2);
  for (let i = 0; i < updateMovie.roles.length; i++) {
    const role = updateMovie.roles[i];
    expect(role.type).toStrictEqual(roles2[i].type);
    expect(role.role).toStrictEqual(roles2[i].role);
    expect(role.person.id).toStrictEqual(roles2[i].personId);
  }

  const removePersonResult = await sdk.removePeople({
    where: { id: { equal: createMovie.id } }
  });
  expect(removePersonResult.errors).toBeUndefined();
  expect(removePersonResult.data).toBeDefined();
  if (!removePersonResult.data) {
    return;
  }
  expect(removePersonResult.data.removePeople.count).toBe(1);

  const removeResult = await sdk.removeMovies({
    where: { id: { equal: createMovie.id } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeMovies.count).toBe(1);
};

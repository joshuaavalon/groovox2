import type { Sdk } from "@groovox/test-graphql-client";

export const testCreate = async (sdk: Sdk): Promise<void> => {
  const name = "Create Studio Name";
  const description = "Create Studio Desc";
  const { data, errors } = await sdk.createStudio({
    data: { name, description }
  });
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();
  if (!data) {
    return;
  }
  const { createStudio } = data;
  expect(createStudio.id).toBeDefined();
  expect(createStudio.name).toBe(name);
  expect(createStudio.description).toBe(description);

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

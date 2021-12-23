import type { Sdk } from "@groovox/test-graphql-client";

export const testCreate = async (sdk: Sdk): Promise<void> => {
  const name = "Create Movie Name";
  const nameSort = "Create Movie Name Sort";
  const contentRating = "TV";
  const airedDate = "2020-01-01";
  const tagline = "Create Movie Tagline";
  const rating = 5;
  const description = "Create Movie Desc";
  const alias = [
    "Create Movie Alias 1",
    "Create Movie Alias 2",
    "Create Movie Alias 3"
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
      alias
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

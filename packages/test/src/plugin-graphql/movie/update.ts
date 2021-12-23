import { DateTime } from "luxon";

import type { Sdk } from "@groovox/test-graphql-client";

export const testUpdate = async (sdk: Sdk): Promise<void> => {
  const name = "Update Movie Name";
  const nameSort = "Update Movie Name Sort";
  const contentRating = "TV";
  const airedDate = "2020-01-01";
  const tagline = "Update Movie Tagline";
  const rating = 5;
  const description = "Update Movie Desc";
  const alias = [
    "Update Movie Alias 1",
    "Update Movie Alias 2",
    "Update Movie Alias 3"
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

  const name2 = "Update Movie Name 2";
  const description2 = "Update Movie Desc 2";
  const alias2 = [
    "Update Movie Alias 1B",
    "Update Movie Alias 2B",
    "Update Movie Alias 2B"
  ];
  const updateResult = await sdk.updateMovie({
    where: { id: createMovie.id },
    data: {
      name: name2,
      description: description2,
      alias: alias2
    }
  });
  expect(updateResult.errors).toBeUndefined();
  expect(updateResult.data).toBeDefined();
  if (!updateResult.data) {
    return;
  }
  const { updateMovie } = updateResult.data;
  expect(updateMovie.id).toBe(createMovie.id);
  expect(updateMovie.name).toBe(name2);
  expect(updateMovie.description).toBe(description2);
  expect(updateMovie.alias).toStrictEqual(alias2);
  expect(updateMovie.nameSort).toBe(nameSort);
  expect(updateMovie.contentRating).toBe(contentRating);
  expect(updateMovie.airedDate).toBe(airedDate);
  expect(updateMovie.tagline).toBe(tagline);
  expect(updateMovie.rating).toBe(rating);

  const oldUpdateAt = DateTime.fromISO(createMovie.updatedAt);
  const newUpdateAt = DateTime.fromISO(updateMovie.updatedAt);
  expect(newUpdateAt > oldUpdateAt).toBeTruthy();

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

import type { Sdk } from "@groovox/test-graphql-client";

export const testFindById = async (sdk: Sdk): Promise<void> => {
  const name = "Find Movie By Id Name";
  const nameSort = "Find Movie By Id Name Sort";
  const contentRating = "TV";
  const airedDate = "2020-01-01";
  const tagline = "Find Movie By Id Tagline";
  const rating = 5;
  const description = "Find Movie By Id Desc";
  const alias = [
    "Find Movie By Id Alias 1",
    "Find Movie By Id Alias 2",
    "Find Movie By Id Alias 3"
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

  const findResult = await sdk.findMovie({
    where: { id: createMovie.id }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data || !findResult.data.findMovie) {
    return;
  }
  const { findMovie } = findResult.data;
  expect(findMovie.id).toBe(createMovie.id);
  expect(findMovie.name).toBe(name);
  expect(findMovie.nameSort).toBe(nameSort);
  expect(findMovie.contentRating).toBe(contentRating);
  expect(findMovie.airedDate).toBe(airedDate);
  expect(findMovie.tagline).toBe(tagline);
  expect(findMovie.rating).toBe(rating);
  expect(findMovie.description).toBe(description);
  expect(findMovie.alias).toStrictEqual(alias);

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

export const testFindByNameEqual = async (sdk: Sdk): Promise<void> => {
  const name = "Find Movie By Name Name";
  const nameSort = "Find Movie By Name Name Sort";
  const contentRating = "TV";
  const airedDate = "2020-01-01";
  const tagline = "Find Movie By Name Tagline";
  const rating = 5;
  const description = "Find Movie By Name Desc";
  const alias = [
    "Find Movie By Name Alias 1",
    "Find Movie By Name Alias 2",
    "Find Movie By Name Alias 3"
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

  const findResult = await sdk.findMovies({
    where: { name: { equal: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { findMovies } = findResult.data;
  expect(findMovies.length).toBe(1);

  const movie = findMovies[0];
  expect(movie.id).toBe(createMovie.id);
  expect(movie.name).toBe(name);
  expect(movie.nameSort).toBe(nameSort);
  expect(movie.contentRating).toBe(contentRating);
  expect(movie.airedDate).toBe(airedDate);
  expect(movie.tagline).toBe(tagline);
  expect(movie.rating).toBe(rating);
  expect(movie.description).toBe(description);
  expect(movie.alias).toStrictEqual(alias);

  const removeResult = await sdk.removeMovies({
    where: { name: { equal: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeMovies.count).toBe(1);
};

export const testFindByNameStartWith = async (sdk: Sdk): Promise<void> => {
  const name = "Find Movie By Start With Name";
  const nameSort = "Find Movie By Start With Name Sort";
  const contentRating = "TV";
  const airedDate = "2020-01-01";
  const tagline = "Find Movie By Start With Tagline";
  const rating = 5;
  const description = "Find Movie By Start With Desc";
  const alias = [
    "Find Movie By Start With Alias 1",
    "Find Movie By Start With Alias 2",
    "Find Movie By Start With Alias 3"
  ];

  for (let i = 1; i < 4; i++) {
    const suffix = " " + i;
    const createResult = await sdk.createMovie({
      data: {
        name: name + suffix,
        nameSort: nameSort + suffix,
        contentRating,
        airedDate,
        tagline,
        rating,
        description: description + suffix,
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
    expect(createMovie.name).toBe(name + suffix);
    expect(createMovie.description).toBe(description + suffix);
    expect(createMovie.nameSort).toBe(nameSort + suffix);
    expect(createMovie.contentRating).toBe(contentRating);
    expect(createMovie.airedDate).toBe(airedDate);
    expect(createMovie.tagline).toBe(tagline);
    expect(createMovie.rating).toBe(rating);
    expect(createMovie.alias).toStrictEqual(alias);
  }

  const findResult = await sdk.findMovies({
    where: { name: { startWith: name } }
  });
  expect(findResult.errors).toBeUndefined();
  expect(findResult.data).toBeDefined();
  if (!findResult.data) {
    return;
  }
  const { findMovies } = findResult.data;
  expect(findMovies.length).toBe(3);

  for (let i = 0; i < 3; i++) {
    const movie = findMovies[i];
    const suffix = " " + (i + 1);
    expect(movie.name).toBe(name + suffix);
    expect(movie.description).toBe(description + suffix);
    expect(movie.nameSort).toBe(nameSort);
    expect(movie.contentRating).toBe(contentRating);
    expect(movie.airedDate).toBe(airedDate);
    expect(movie.tagline).toBe(tagline);
    expect(movie.rating).toBe(rating);
    expect(movie.alias).toStrictEqual(alias);
  }

  const removeResult = await sdk.removeMovies({
    where: { name: { startWith: name } }
  });
  expect(removeResult.errors).toBeUndefined();
  expect(removeResult.data).toBeDefined();
  if (!removeResult.data) {
    return;
  }
  expect(removeResult.data.removeMovies.count).toBe(3);
};

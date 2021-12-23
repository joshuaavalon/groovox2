// @ts-nocheck
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `Decimal` scalar type to represent values */
  Decimal: number;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: string;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AffectedRowsOutput = {
  count: Scalars['Int'];
};

export type BooleanFilter = {
  equal: Scalars['Boolean'];
};

export type DateNullableFilter = {
  equal?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Date']>>;
};

export type DateTimeFilter = {
  equal?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalNullableFilter = {
  equal?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<DecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type Movie = {
  _id: Scalars['ID'];
  airedDate?: Maybe<Scalars['Date']>;
  alias: Array<Scalars['String']>;
  contentRating: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  nameSort: Scalars['String'];
  rating?: Maybe<Scalars['Decimal']>;
  roles: Array<MovieRole>;
  studios: Array<Studio>;
  tagline: Scalars['String'];
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime'];
};


export type MovieStudiosArgs = {
  orderBy?: InputMaybe<Array<StudioOrderByInput>>;
};


export type MovieTagsArgs = {
  orderBy?: InputMaybe<Array<TagOrderByInput>>;
};

export type MovieCreateOneInput = {
  airedDate?: InputMaybe<Scalars['Date']>;
  alias?: Array<Scalars['String']>;
  contentRating: Scalars['String'];
  description?: Scalars['String'];
  name: Scalars['String'];
  nameSort: Scalars['String'];
  rating?: InputMaybe<Scalars['Decimal']>;
  roles?: Array<MovieCreateRoleInput>;
  studioIds?: Array<Scalars['UUID']>;
  tagline?: Scalars['String'];
};

export type MovieCreateRoleInput = {
  personId: Scalars['UUID'];
  role: Scalars['String'];
  type: Scalars['String'];
};

export type MovieFindManyInput = {
  airedDate?: InputMaybe<DateNullableFilter>;
  and?: InputMaybe<Array<MovieFindManyInput>>;
  contentRating?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nameSort?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<MovieFindManyInput>>;
  or?: InputMaybe<Array<MovieFindManyInput>>;
  rating?: InputMaybe<DecimalNullableFilter>;
  tagline?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieFindOneInput = {
  id: Scalars['UUID'];
};

export type MovieOrderByInput = {
  airedDate?: InputMaybe<SortOrder>;
  contentRating?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nameSort?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieRole = {
  _id: Scalars['ID'];
  id: Scalars['UUID'];
  movie: Movie;
  person: Person;
  role: Scalars['String'];
  type: Scalars['String'];
};

export type MovieRoleCreateOneInput = {
  movieId: Scalars['UUID'];
  personId: Scalars['UUID'];
  role: Scalars['String'];
  type: Scalars['String'];
};

export type MovieRoleFindManyInput = {
  and?: InputMaybe<Array<MovieRoleFindManyInput>>;
  id?: InputMaybe<UuidFilter>;
  movieId?: InputMaybe<UuidFilter>;
  not?: InputMaybe<Array<MovieRoleFindManyInput>>;
  or?: InputMaybe<Array<MovieRoleFindManyInput>>;
  personId?: InputMaybe<UuidFilter>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type MovieRoleFindOneInput = {
  id: Scalars['UUID'];
};

export type MovieRoleOrderByInput = {
  role?: InputMaybe<SortOrder>;
  sequence?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type MovieRoleUpdateOneInput = {
  personId?: InputMaybe<Scalars['UUID']>;
  role?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type MovieUpdateOneInput = {
  airedDate?: InputMaybe<Scalars['Date']>;
  alias?: InputMaybe<Array<Scalars['String']>>;
  contentRating?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nameSort?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Decimal']>;
  roles?: InputMaybe<Array<MovieCreateRoleInput>>;
  studioIds?: InputMaybe<Array<Scalars['UUID']>>;
  tagline?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  createMovie: Movie;
  createPerson: Person;
  createStudio: Studio;
  createTag: Tag;
  createTagCategory: TagCategory;
  createUnit: Unit;
  removeMovies: AffectedRowsOutput;
  removePeople: AffectedRowsOutput;
  removeStudios: AffectedRowsOutput;
  removeTagCategories: AffectedRowsOutput;
  removeTags: AffectedRowsOutput;
  removeUnits: AffectedRowsOutput;
  updateMovie: Movie;
  updateMovieRole: MovieRole;
  updatePerson: Person;
  updateStudio: Studio;
  updateTag: Tag;
  updateTagCategory: TagCategory;
  updateUnit: Unit;
};


export type MutationCreateMovieArgs = {
  data: MovieCreateOneInput;
};


export type MutationCreatePersonArgs = {
  data: PersonCreateOneInput;
};


export type MutationCreateStudioArgs = {
  data: StudioCreateOneInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateOneInput;
};


export type MutationCreateTagCategoryArgs = {
  data: TagCategoryCreateOneInput;
};


export type MutationCreateUnitArgs = {
  data: UnitCreateOneInput;
};


export type MutationRemoveMoviesArgs = {
  where: MovieFindManyInput;
};


export type MutationRemovePeopleArgs = {
  where: PersonFindManyInput;
};


export type MutationRemoveStudiosArgs = {
  where: StudioFindManyInput;
};


export type MutationRemoveTagCategoriesArgs = {
  where: TagCategoryFindManyInput;
};


export type MutationRemoveTagsArgs = {
  where: TagFindManyInput;
};


export type MutationRemoveUnitsArgs = {
  where: UnitFindManyInput;
};


export type MutationUpdateMovieArgs = {
  data: MovieUpdateOneInput;
  where: MovieFindOneInput;
};


export type MutationUpdateMovieRoleArgs = {
  data: MovieRoleUpdateOneInput;
  where: MovieRoleFindOneInput;
};


export type MutationUpdatePersonArgs = {
  data: PersonUpdateOneInput;
  where: PersonFindOneInput;
};


export type MutationUpdateStudioArgs = {
  data: StudioUpdateOneInput;
  where: StudioFindOneInput;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateOneInput;
  where: TagFindOneInput;
};


export type MutationUpdateTagCategoryArgs = {
  data: TagCategoryUpdateOneInput;
  where: TagCategoryFindOneInput;
};


export type MutationUpdateUnitArgs = {
  data: UnitUpdateOneInput;
  where: UnitFindOneInput;
};

/** Control the range of the records to return. */
export type Pagination = {
  /** Number of records to skip. Must be greater or equal than 0. */
  skip?: InputMaybe<Scalars['Int']>;
  /** Maximum number of records to return. Must be greater than 0. */
  take?: InputMaybe<Scalars['Int']>;
};

export type Person = {
  _id: Scalars['ID'];
  birthDate?: Maybe<Scalars['Date']>;
  createdAt: Scalars['DateTime'];
  deathDate?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  id: Scalars['UUID'];
  nameFirst: Scalars['String'];
  nameLast: Scalars['String'];
  nameMiddle: Scalars['String'];
  nameSort: Scalars['String'];
  sex: Scalars['String'];
  tags: Array<Tag>;
  units: Array<Unit>;
  updatedAt: Scalars['DateTime'];
};

export type PersonCreateOneInput = {
  birthDate?: InputMaybe<Scalars['Date']>;
  deathDate?: InputMaybe<Scalars['Date']>;
  description?: Scalars['String'];
  nameFirst: Scalars['String'];
  nameLast: Scalars['String'];
  nameMiddle: Scalars['String'];
  nameSort: Scalars['String'];
  sex: Scalars['String'];
};

export type PersonFindManyInput = {
  and?: InputMaybe<Array<PersonFindManyInput>>;
  birthDate?: InputMaybe<DateNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deathDate?: InputMaybe<DateNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nameFirst?: InputMaybe<StringFilter>;
  nameLast?: InputMaybe<StringFilter>;
  nameMiddle?: InputMaybe<StringFilter>;
  nameSort?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<PersonFindManyInput>>;
  or?: InputMaybe<Array<PersonFindManyInput>>;
  sex?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonFindOneInput = {
  id: Scalars['UUID'];
};

export type PersonOrderByInput = {
  birthDate?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deathDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nameFirst?: InputMaybe<SortOrder>;
  nameLast?: InputMaybe<SortOrder>;
  nameMiddle?: InputMaybe<SortOrder>;
  nameSort?: InputMaybe<SortOrder>;
  sex?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonUpdateOneInput = {
  birthDate?: InputMaybe<Scalars['Date']>;
  deathDate?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  nameFirst?: InputMaybe<Scalars['String']>;
  nameLast?: InputMaybe<Scalars['String']>;
  nameMiddle?: InputMaybe<Scalars['String']>;
  nameSort?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['UUID']>>;
  unitIds?: InputMaybe<Array<Scalars['UUID']>>;
};

export type Query = {
  findMovie?: Maybe<Movie>;
  findMovieRole?: Maybe<MovieRole>;
  findMovieRoles: Array<MovieRole>;
  findMovies: Array<Movie>;
  findPeople: Array<Person>;
  findPerson?: Maybe<Person>;
  findStudio?: Maybe<Studio>;
  findStudios: Array<Studio>;
  findTag?: Maybe<Tag>;
  findTagCategories: Array<TagCategory>;
  findTagCategory?: Maybe<TagCategory>;
  findTags: Array<Tag>;
  findUnit?: Maybe<Unit>;
  findUnits: Array<Unit>;
};


export type QueryFindMovieArgs = {
  where: MovieFindOneInput;
};


export type QueryFindMovieRoleArgs = {
  where: MovieRoleFindOneInput;
};


export type QueryFindMovieRolesArgs = {
  orderBy?: InputMaybe<Array<MovieRoleOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<MovieRoleFindManyInput>;
};


export type QueryFindMoviesArgs = {
  orderBy?: InputMaybe<Array<MovieOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<MovieFindManyInput>;
};


export type QueryFindPeopleArgs = {
  orderBy?: InputMaybe<Array<PersonOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<PersonFindManyInput>;
};


export type QueryFindPersonArgs = {
  where: PersonFindOneInput;
};


export type QueryFindStudioArgs = {
  where: StudioFindOneInput;
};


export type QueryFindStudiosArgs = {
  orderBy?: InputMaybe<Array<StudioOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<StudioFindManyInput>;
};


export type QueryFindTagArgs = {
  where: TagFindOneInput;
};


export type QueryFindTagCategoriesArgs = {
  orderBy?: InputMaybe<Array<TagCategoryOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<TagCategoryFindManyInput>;
};


export type QueryFindTagCategoryArgs = {
  where: TagCategoryFindOneInput;
};


export type QueryFindTagsArgs = {
  orderBy?: InputMaybe<Array<TagOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<TagFindManyInput>;
};


export type QueryFindUnitArgs = {
  where: UnitFindOneInput;
};


export type QueryFindUnitsArgs = {
  orderBy?: InputMaybe<Array<UnitOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<UnitFindManyInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contain?: InputMaybe<Scalars['String']>;
  endWith?: InputMaybe<Scalars['String']>;
  equal?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startWith?: InputMaybe<Scalars['String']>;
};

export type Studio = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type StudioCreateOneInput = {
  description?: Scalars['String'];
  name: Scalars['String'];
};

export type StudioFindManyInput = {
  and?: InputMaybe<Array<StudioFindManyInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<StudioFindManyInput>>;
  or?: InputMaybe<Array<StudioFindManyInput>>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StudioFindOneInput = {
  id: Scalars['UUID'];
};

export type StudioOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StudioUpdateOneInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  _id: Scalars['ID'];
  category: TagCategory;
  categoryId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TagCategory = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime'];
};

export type TagCategoryCreateOneInput = {
  description?: Scalars['String'];
  name: Scalars['String'];
};

export type TagCategoryFindManyInput = {
  and?: InputMaybe<Array<TagCategoryFindManyInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<TagCategoryFindManyInput>>;
  or?: InputMaybe<Array<TagCategoryFindManyInput>>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagCategoryFindOneInput = {
  id: Scalars['UUID'];
};

export type TagCategoryOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagCategoryUpdateOneInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TagCreateOneInput = {
  categoryId: Scalars['UUID'];
  description?: Scalars['String'];
  name: Scalars['String'];
};

export type TagFindManyInput = {
  and?: InputMaybe<Array<TagFindManyInput>>;
  categoryId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<TagFindManyInput>>;
  or?: InputMaybe<Array<TagFindManyInput>>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagFindOneInput = {
  id: Scalars['UUID'];
};

export type TagOrderByInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagUpdateOneInput = {
  categoryId?: InputMaybe<Scalars['UUID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UuidFilter = {
  equal?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  not?: InputMaybe<UuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type Unit = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  members: Array<Person>;
  name: Scalars['String'];
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime'];
};

export type UnitCreateOneInput = {
  description?: Scalars['String'];
  name: Scalars['String'];
};

export type UnitFindManyInput = {
  and?: InputMaybe<Array<UnitFindManyInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<UnitFindManyInput>>;
  or?: InputMaybe<Array<UnitFindManyInput>>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UnitFindOneInput = {
  id: Scalars['UUID'];
};

export type UnitOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UnitUpdateOneInput = {
  description?: InputMaybe<Scalars['String']>;
  memberIds?: InputMaybe<Array<Scalars['UUID']>>;
  name?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['UUID']>>;
};

export type CreateMovieMutationVariables = Exact<{
  data: MovieCreateOneInput;
}>;


export type CreateMovieMutation = { createMovie: { id: string, name: string, nameSort: string, contentRating: string, airedDate?: string | null | undefined, tagline: string, rating?: number | null | undefined, description: string, updatedAt: string, createdAt: string, alias: Array<string>, studios: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, roles: Array<{ id: string, type: string, role: string, person: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string } }> } };

export type CreatePersonMutationVariables = Exact<{
  data: PersonCreateOneInput;
}>;


export type CreatePersonMutation = { createPerson: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string } };

export type CreateStudioMutationVariables = Exact<{
  data: StudioCreateOneInput;
}>;


export type CreateStudioMutation = { createStudio: { id: string, name: string, description: string, updatedAt: string, createdAt: string } };

export type CreateTagCategoryMutationVariables = Exact<{
  data: TagCategoryCreateOneInput;
}>;


export type CreateTagCategoryMutation = { createTagCategory: { id: string, name: string, description: string, updatedAt: string, createdAt: string } };

export type CreateTagMutationVariables = Exact<{
  data: TagCreateOneInput;
}>;


export type CreateTagMutation = { createTag: { id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } } };

export type CreateUnitMutationVariables = Exact<{
  data: UnitCreateOneInput;
}>;


export type CreateUnitMutation = { createUnit: { id: string, name: string, description: string, createdAt: string, updatedAt: string } };

export type FindMovieQueryVariables = Exact<{
  where: MovieFindOneInput;
}>;


export type FindMovieQuery = { findMovie?: { id: string, name: string, nameSort: string, contentRating: string, airedDate?: string | null | undefined, tagline: string, rating?: number | null | undefined, description: string, updatedAt: string, createdAt: string, alias: Array<string>, studios: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, roles: Array<{ id: string, type: string, role: string, person: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string } }> } | null | undefined };

export type FindMoviesQueryVariables = Exact<{
  where: MovieFindManyInput;
}>;


export type FindMoviesQuery = { findMovies: Array<{ id: string, name: string, nameSort: string, contentRating: string, airedDate?: string | null | undefined, tagline: string, rating?: number | null | undefined, description: string, updatedAt: string, createdAt: string, alias: Array<string>, studios: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, roles: Array<{ id: string, type: string, role: string, person: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string } }> }> };

export type FindPeopleQueryVariables = Exact<{
  where: PersonFindManyInput;
}>;


export type FindPeopleQuery = { findPeople: Array<{ id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string }> };

export type FindPersonQueryVariables = Exact<{
  where: PersonFindOneInput;
}>;


export type FindPersonQuery = { findPerson?: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string, units: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } }> } | null | undefined };

export type FindStudioQueryVariables = Exact<{
  where: StudioFindOneInput;
}>;


export type FindStudioQuery = { findStudio?: { id: string, name: string, description: string, updatedAt: string, createdAt: string } | null | undefined };

export type FindStudiosQueryVariables = Exact<{
  where: StudioFindManyInput;
}>;


export type FindStudiosQuery = { findStudios: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }> };

export type FindTagCategoriesQueryVariables = Exact<{
  where: TagCategoryFindManyInput;
}>;


export type FindTagCategoriesQuery = { findTagCategories: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }> }> };

export type FindTagCategoryQueryVariables = Exact<{
  where: TagCategoryFindOneInput;
}>;


export type FindTagCategoryQuery = { findTagCategory?: { id: string, name: string, description: string, updatedAt: string, createdAt: string, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }> } | null | undefined };

export type FindTagQueryVariables = Exact<{
  where: TagFindOneInput;
}>;


export type FindTagQuery = { findTag?: { id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } } | null | undefined };

export type FindTagsQueryVariables = Exact<{
  where: TagFindManyInput;
}>;


export type FindTagsQuery = { findTags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } }> };

export type FindUnitQueryVariables = Exact<{
  where: UnitFindOneInput;
}>;


export type FindUnitQuery = { findUnit?: { id: string, name: string, description: string, updatedAt: string, createdAt: string, members: Array<{ id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string }>, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } }> } | null | undefined };

export type FindUnitsQueryVariables = Exact<{
  where: UnitFindManyInput;
}>;


export type FindUnitsQuery = { findUnits: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }> };

export type RemoveMoviesMutationVariables = Exact<{
  where: MovieFindManyInput;
}>;


export type RemoveMoviesMutation = { removeMovies: { count: number } };

export type RemovePeopleMutationVariables = Exact<{
  where: PersonFindManyInput;
}>;


export type RemovePeopleMutation = { removePeople: { count: number } };

export type RemoveStudiosMutationVariables = Exact<{
  where: StudioFindManyInput;
}>;


export type RemoveStudiosMutation = { removeStudios: { count: number } };

export type RemoveTagCategoriesMutationVariables = Exact<{
  where: TagCategoryFindManyInput;
}>;


export type RemoveTagCategoriesMutation = { removeTagCategories: { count: number } };

export type RemoveTagsMutationVariables = Exact<{
  where: TagFindManyInput;
}>;


export type RemoveTagsMutation = { removeTags: { count: number } };

export type RemoveUnitsMutationVariables = Exact<{
  where: UnitFindManyInput;
}>;


export type RemoveUnitsMutation = { removeUnits: { count: number } };

export type UpdateMovieMutationVariables = Exact<{
  data: MovieUpdateOneInput;
  where: MovieFindOneInput;
}>;


export type UpdateMovieMutation = { updateMovie: { id: string, name: string, nameSort: string, contentRating: string, airedDate?: string | null | undefined, tagline: string, rating?: number | null | undefined, description: string, updatedAt: string, createdAt: string, alias: Array<string>, studios: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, roles: Array<{ id: string, type: string, role: string, person: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string } }> } };

export type UpdatePersonMutationVariables = Exact<{
  data: PersonUpdateOneInput;
  where: PersonFindOneInput;
}>;


export type UpdatePersonMutation = { updatePerson: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string, units: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }>, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } }> } };

export type UpdateStudioMutationVariables = Exact<{
  data: StudioUpdateOneInput;
  where: StudioFindOneInput;
}>;


export type UpdateStudioMutation = { updateStudio: { id: string, name: string, description: string, updatedAt: string, createdAt: string } };

export type UpdateTagCategoryMutationVariables = Exact<{
  data: TagCategoryUpdateOneInput;
  where: TagCategoryFindOneInput;
}>;


export type UpdateTagCategoryMutation = { updateTagCategory: { id: string, name: string, description: string, updatedAt: string, createdAt: string } };

export type UpdateTagMutationVariables = Exact<{
  data: TagUpdateOneInput;
  where: TagFindOneInput;
}>;


export type UpdateTagMutation = { updateTag: { id: string, name: string, description: string, updatedAt: string, createdAt: string } };

export type UpdateUnitMutationVariables = Exact<{
  data: UnitUpdateOneInput;
  where: UnitFindOneInput;
}>;


export type UpdateUnitMutation = { updateUnit: { id: string, name: string, description: string, updatedAt: string, createdAt: string, members: Array<{ id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string }>, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } }> } };


export const CreateMovieDocument = gql`
    mutation createMovie($data: MovieCreateOneInput!) {
  createMovie(data: $data) {
    id
    name
    nameSort
    contentRating
    airedDate
    tagline
    rating
    description
    updatedAt
    createdAt
    alias
    studios {
      id
      name
      description
      updatedAt
      createdAt
    }
    tags {
      id
      name
      description
      updatedAt
      createdAt
    }
    roles {
      id
      type
      role
      person {
        id
        birthDate
        createdAt
        deathDate
        description
        nameFirst
        nameLast
        nameMiddle
        nameSort
        sex
        updatedAt
      }
    }
  }
}
    `;
export const CreatePersonDocument = gql`
    mutation createPerson($data: PersonCreateOneInput!) {
  createPerson(data: $data) {
    id
    birthDate
    createdAt
    deathDate
    description
    nameFirst
    nameLast
    nameMiddle
    nameSort
    sex
    updatedAt
  }
}
    `;
export const CreateStudioDocument = gql`
    mutation createStudio($data: StudioCreateOneInput!) {
  createStudio(data: $data) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const CreateTagCategoryDocument = gql`
    mutation createTagCategory($data: TagCategoryCreateOneInput!) {
  createTagCategory(data: $data) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const CreateTagDocument = gql`
    mutation createTag($data: TagCreateOneInput!) {
  createTag(data: $data) {
    id
    name
    description
    updatedAt
    createdAt
    category {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
}
    `;
export const CreateUnitDocument = gql`
    mutation createUnit($data: UnitCreateOneInput!) {
  createUnit(data: $data) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;
export const FindMovieDocument = gql`
    query findMovie($where: MovieFindOneInput!) {
  findMovie(where: $where) {
    id
    name
    nameSort
    contentRating
    airedDate
    tagline
    rating
    description
    updatedAt
    createdAt
    alias
    studios {
      id
      name
      description
      updatedAt
      createdAt
    }
    tags {
      id
      name
      description
      updatedAt
      createdAt
    }
    roles {
      id
      type
      role
      person {
        id
        birthDate
        createdAt
        deathDate
        description
        nameFirst
        nameLast
        nameMiddle
        nameSort
        sex
        updatedAt
      }
    }
  }
}
    `;
export const FindMoviesDocument = gql`
    query findMovies($where: MovieFindManyInput!) {
  findMovies(where: $where) {
    id
    name
    nameSort
    contentRating
    airedDate
    tagline
    rating
    description
    updatedAt
    createdAt
    alias
    studios {
      id
      name
      description
      updatedAt
      createdAt
    }
    tags {
      id
      name
      description
      updatedAt
      createdAt
    }
    roles {
      id
      type
      role
      person {
        id
        birthDate
        createdAt
        deathDate
        description
        nameFirst
        nameLast
        nameMiddle
        nameSort
        sex
        updatedAt
      }
    }
  }
}
    `;
export const FindPeopleDocument = gql`
    query findPeople($where: PersonFindManyInput!) {
  findPeople(where: $where) {
    id
    birthDate
    createdAt
    deathDate
    description
    nameFirst
    nameLast
    nameMiddle
    nameSort
    sex
    updatedAt
  }
}
    `;
export const FindPersonDocument = gql`
    query findPerson($where: PersonFindOneInput!) {
  findPerson(where: $where) {
    id
    birthDate
    createdAt
    deathDate
    description
    nameFirst
    nameLast
    nameMiddle
    nameSort
    sex
    updatedAt
    units {
      id
      name
      description
      updatedAt
      createdAt
    }
    tags {
      id
      name
      description
      updatedAt
      createdAt
      category {
        id
        name
        description
        updatedAt
        createdAt
      }
    }
  }
}
    `;
export const FindStudioDocument = gql`
    query findStudio($where: StudioFindOneInput!) {
  findStudio(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const FindStudiosDocument = gql`
    query findStudios($where: StudioFindManyInput!) {
  findStudios(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const FindTagCategoriesDocument = gql`
    query findTagCategories($where: TagCategoryFindManyInput!) {
  findTagCategories(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
    tags {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
}
    `;
export const FindTagCategoryDocument = gql`
    query findTagCategory($where: TagCategoryFindOneInput!) {
  findTagCategory(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
    tags {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
}
    `;
export const FindTagDocument = gql`
    query findTag($where: TagFindOneInput!) {
  findTag(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
    category {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
}
    `;
export const FindTagsDocument = gql`
    query findTags($where: TagFindManyInput!) {
  findTags(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
    category {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
}
    `;
export const FindUnitDocument = gql`
    query findUnit($where: UnitFindOneInput!) {
  findUnit(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
    members {
      id
      birthDate
      createdAt
      deathDate
      description
      nameFirst
      nameLast
      nameMiddle
      nameSort
      sex
      updatedAt
    }
    tags {
      id
      name
      description
      updatedAt
      createdAt
      category {
        id
        name
        description
        updatedAt
        createdAt
      }
    }
  }
}
    `;
export const FindUnitsDocument = gql`
    query findUnits($where: UnitFindManyInput!) {
  findUnits(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const RemoveMoviesDocument = gql`
    mutation removeMovies($where: MovieFindManyInput!) {
  removeMovies(where: $where) {
    count
  }
}
    `;
export const RemovePeopleDocument = gql`
    mutation removePeople($where: PersonFindManyInput!) {
  removePeople(where: $where) {
    count
  }
}
    `;
export const RemoveStudiosDocument = gql`
    mutation removeStudios($where: StudioFindManyInput!) {
  removeStudios(where: $where) {
    count
  }
}
    `;
export const RemoveTagCategoriesDocument = gql`
    mutation removeTagCategories($where: TagCategoryFindManyInput!) {
  removeTagCategories(where: $where) {
    count
  }
}
    `;
export const RemoveTagsDocument = gql`
    mutation removeTags($where: TagFindManyInput!) {
  removeTags(where: $where) {
    count
  }
}
    `;
export const RemoveUnitsDocument = gql`
    mutation removeUnits($where: UnitFindManyInput!) {
  removeUnits(where: $where) {
    count
  }
}
    `;
export const UpdateMovieDocument = gql`
    mutation updateMovie($data: MovieUpdateOneInput!, $where: MovieFindOneInput!) {
  updateMovie(data: $data, where: $where) {
    id
    name
    nameSort
    contentRating
    airedDate
    tagline
    rating
    description
    updatedAt
    createdAt
    alias
    studios {
      id
      name
      description
      updatedAt
      createdAt
    }
    tags {
      id
      name
      description
      updatedAt
      createdAt
    }
    roles {
      id
      type
      role
      person {
        id
        birthDate
        createdAt
        deathDate
        description
        nameFirst
        nameLast
        nameMiddle
        nameSort
        sex
        updatedAt
      }
    }
  }
}
    `;
export const UpdatePersonDocument = gql`
    mutation updatePerson($data: PersonUpdateOneInput!, $where: PersonFindOneInput!) {
  updatePerson(data: $data, where: $where) {
    id
    birthDate
    createdAt
    deathDate
    description
    nameFirst
    nameLast
    nameMiddle
    nameSort
    sex
    updatedAt
    units {
      id
      name
      description
      updatedAt
      createdAt
    }
    tags {
      id
      name
      description
      updatedAt
      createdAt
      category {
        id
        name
        description
        updatedAt
        createdAt
      }
    }
  }
}
    `;
export const UpdateStudioDocument = gql`
    mutation updateStudio($data: StudioUpdateOneInput!, $where: StudioFindOneInput!) {
  updateStudio(data: $data, where: $where) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const UpdateTagCategoryDocument = gql`
    mutation updateTagCategory($data: TagCategoryUpdateOneInput!, $where: TagCategoryFindOneInput!) {
  updateTagCategory(data: $data, where: $where) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const UpdateTagDocument = gql`
    mutation updateTag($data: TagUpdateOneInput!, $where: TagFindOneInput!) {
  updateTag(data: $data, where: $where) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const UpdateUnitDocument = gql`
    mutation updateUnit($data: UnitUpdateOneInput!, $where: UnitFindOneInput!) {
  updateUnit(data: $data, where: $where) {
    id
    name
    description
    updatedAt
    createdAt
    members {
      id
      birthDate
      createdAt
      deathDate
      description
      nameFirst
      nameLast
      nameMiddle
      nameSort
      sex
      updatedAt
    }
    tags {
      id
      name
      description
      updatedAt
      createdAt
      category {
        id
        name
        description
        updatedAt
        createdAt
      }
    }
  }
}
    `;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    createMovie(variables: CreateMovieMutationVariables, options?: C): Promise<{ data?: CreateMovieMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, variables, options);
    },
    createPerson(variables: CreatePersonMutationVariables, options?: C): Promise<{ data?: CreatePersonMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, variables, options);
    },
    createStudio(variables: CreateStudioMutationVariables, options?: C): Promise<{ data?: CreateStudioMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<CreateStudioMutation, CreateStudioMutationVariables>(CreateStudioDocument, variables, options);
    },
    createTagCategory(variables: CreateTagCategoryMutationVariables, options?: C): Promise<{ data?: CreateTagCategoryMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<CreateTagCategoryMutation, CreateTagCategoryMutationVariables>(CreateTagCategoryDocument, variables, options);
    },
    createTag(variables: CreateTagMutationVariables, options?: C): Promise<{ data?: CreateTagMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, variables, options);
    },
    createUnit(variables: CreateUnitMutationVariables, options?: C): Promise<{ data?: CreateUnitMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<CreateUnitMutation, CreateUnitMutationVariables>(CreateUnitDocument, variables, options);
    },
    findMovie(variables: FindMovieQueryVariables, options?: C): Promise<{ data?: FindMovieQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindMovieQuery, FindMovieQueryVariables>(FindMovieDocument, variables, options);
    },
    findMovies(variables: FindMoviesQueryVariables, options?: C): Promise<{ data?: FindMoviesQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindMoviesQuery, FindMoviesQueryVariables>(FindMoviesDocument, variables, options);
    },
    findPeople(variables: FindPeopleQueryVariables, options?: C): Promise<{ data?: FindPeopleQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindPeopleQuery, FindPeopleQueryVariables>(FindPeopleDocument, variables, options);
    },
    findPerson(variables: FindPersonQueryVariables, options?: C): Promise<{ data?: FindPersonQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindPersonQuery, FindPersonQueryVariables>(FindPersonDocument, variables, options);
    },
    findStudio(variables: FindStudioQueryVariables, options?: C): Promise<{ data?: FindStudioQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindStudioQuery, FindStudioQueryVariables>(FindStudioDocument, variables, options);
    },
    findStudios(variables: FindStudiosQueryVariables, options?: C): Promise<{ data?: FindStudiosQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindStudiosQuery, FindStudiosQueryVariables>(FindStudiosDocument, variables, options);
    },
    findTagCategories(variables: FindTagCategoriesQueryVariables, options?: C): Promise<{ data?: FindTagCategoriesQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindTagCategoriesQuery, FindTagCategoriesQueryVariables>(FindTagCategoriesDocument, variables, options);
    },
    findTagCategory(variables: FindTagCategoryQueryVariables, options?: C): Promise<{ data?: FindTagCategoryQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindTagCategoryQuery, FindTagCategoryQueryVariables>(FindTagCategoryDocument, variables, options);
    },
    findTag(variables: FindTagQueryVariables, options?: C): Promise<{ data?: FindTagQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindTagQuery, FindTagQueryVariables>(FindTagDocument, variables, options);
    },
    findTags(variables: FindTagsQueryVariables, options?: C): Promise<{ data?: FindTagsQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, variables, options);
    },
    findUnit(variables: FindUnitQueryVariables, options?: C): Promise<{ data?: FindUnitQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindUnitQuery, FindUnitQueryVariables>(FindUnitDocument, variables, options);
    },
    findUnits(variables: FindUnitsQueryVariables, options?: C): Promise<{ data?: FindUnitsQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<FindUnitsQuery, FindUnitsQueryVariables>(FindUnitsDocument, variables, options);
    },
    removeMovies(variables: RemoveMoviesMutationVariables, options?: C): Promise<{ data?: RemoveMoviesMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<RemoveMoviesMutation, RemoveMoviesMutationVariables>(RemoveMoviesDocument, variables, options);
    },
    removePeople(variables: RemovePeopleMutationVariables, options?: C): Promise<{ data?: RemovePeopleMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<RemovePeopleMutation, RemovePeopleMutationVariables>(RemovePeopleDocument, variables, options);
    },
    removeStudios(variables: RemoveStudiosMutationVariables, options?: C): Promise<{ data?: RemoveStudiosMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<RemoveStudiosMutation, RemoveStudiosMutationVariables>(RemoveStudiosDocument, variables, options);
    },
    removeTagCategories(variables: RemoveTagCategoriesMutationVariables, options?: C): Promise<{ data?: RemoveTagCategoriesMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<RemoveTagCategoriesMutation, RemoveTagCategoriesMutationVariables>(RemoveTagCategoriesDocument, variables, options);
    },
    removeTags(variables: RemoveTagsMutationVariables, options?: C): Promise<{ data?: RemoveTagsMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<RemoveTagsMutation, RemoveTagsMutationVariables>(RemoveTagsDocument, variables, options);
    },
    removeUnits(variables: RemoveUnitsMutationVariables, options?: C): Promise<{ data?: RemoveUnitsMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<RemoveUnitsMutation, RemoveUnitsMutationVariables>(RemoveUnitsDocument, variables, options);
    },
    updateMovie(variables: UpdateMovieMutationVariables, options?: C): Promise<{ data?: UpdateMovieMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdateMovieMutation, UpdateMovieMutationVariables>(UpdateMovieDocument, variables, options);
    },
    updatePerson(variables: UpdatePersonMutationVariables, options?: C): Promise<{ data?: UpdatePersonMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, variables, options);
    },
    updateStudio(variables: UpdateStudioMutationVariables, options?: C): Promise<{ data?: UpdateStudioMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdateStudioMutation, UpdateStudioMutationVariables>(UpdateStudioDocument, variables, options);
    },
    updateTagCategory(variables: UpdateTagCategoryMutationVariables, options?: C): Promise<{ data?: UpdateTagCategoryMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdateTagCategoryMutation, UpdateTagCategoryMutationVariables>(UpdateTagCategoryDocument, variables, options);
    },
    updateTag(variables: UpdateTagMutationVariables, options?: C): Promise<{ data?: UpdateTagMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdateTagMutation, UpdateTagMutationVariables>(UpdateTagDocument, variables, options);
    },
    updateUnit(variables: UpdateUnitMutationVariables, options?: C): Promise<{ data?: UpdateUnitMutation, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<UpdateUnitMutation, UpdateUnitMutationVariables>(UpdateUnitDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
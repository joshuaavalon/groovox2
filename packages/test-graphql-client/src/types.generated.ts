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
  Decimal: string;
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

export type Attachment = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  tag?: Maybe<Tag>;
  tagCategoryId?: Maybe<Scalars['UUID']>;
  tagId?: Maybe<Scalars['UUID']>;
  type: Scalars['String'];
};

export type AttachmentCreateOneInput = {
  description?: Scalars['String'];
  file: Scalars['Upload'];
  type: Scalars['String'];
};

export type AttachmentFindManyInput = {
  and?: InputMaybe<Array<InputMaybe<AttachmentFindManyInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  not?: InputMaybe<Array<InputMaybe<AttachmentFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<AttachmentFindManyInput>>>;
  tag?: InputMaybe<TagFindManyInput>;
  type?: InputMaybe<StringFilter>;
};

export type AttachmentFindOneInput = {
  id: Scalars['UUID'];
};

export type AttachmentOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type AttachmentUpdateOneInput = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type BooleanFilter = {
  equal?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
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

export type DecimalFilter = {
  equal?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<DecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableFilter = {
  equal?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<DecimalFilter>;
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
  contentRating: Scalars['String'];
  description?: Scalars['String'];
  name: Scalars['String'];
  nameSort: Scalars['String'];
  rating?: InputMaybe<Scalars['Decimal']>;
  studioIds?: Array<Scalars['UUID']>;
  tagline?: Scalars['String'];
};

export type MovieFindManyInput = {
  airedDate?: InputMaybe<DateNullableFilter>;
  and?: InputMaybe<Array<InputMaybe<MovieFindManyInput>>>;
  contentRating?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nameSort?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<InputMaybe<MovieFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<MovieFindManyInput>>>;
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
  and?: InputMaybe<Array<InputMaybe<MovieRoleFindManyInput>>>;
  id?: InputMaybe<UuidFilter>;
  not?: InputMaybe<Array<InputMaybe<MovieRoleFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<MovieRoleFindManyInput>>>;
  role?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type MovieRoleFindOneInput = {
  id: Scalars['UUID'];
};

export type MovieRoleOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  sequence?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieRoleUpdateOneInput = {
  role?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type MovieUpdateOneInput = {
  airedDate?: InputMaybe<Scalars['Date']>;
  contentRating?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nameSort?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Decimal']>;
  studioIds?: InputMaybe<Array<Scalars['UUID']>>;
  tagline?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  createAttachment: Attachment;
  createMovie: Movie;
  createPerson: Person;
  createShow: Show;
  createStudio: Studio;
  createTag: Tag;
  createTagCategory: TagCategory;
  createUnit: Unit;
  removeAttachments: AffectedRowsOutput;
  removeMovies: AffectedRowsOutput;
  removePeople: AffectedRowsOutput;
  removeShows: AffectedRowsOutput;
  removeStudios: AffectedRowsOutput;
  removeTagCategories: AffectedRowsOutput;
  removeTags: AffectedRowsOutput;
  removeUnits: AffectedRowsOutput;
  updateAttachment: Attachment;
  updateMovie: Movie;
  updateMovieRole: MovieRole;
  updatePerson: Person;
  updateShow: Show;
  updateStudio: Studio;
  updateTag: Tag;
  updateTagCategory: TagCategory;
  updateUnit: Unit;
};


export type MutationCreateAttachmentArgs = {
  data: AttachmentCreateOneInput;
};


export type MutationCreateMovieArgs = {
  data: MovieCreateOneInput;
};


export type MutationCreatePersonArgs = {
  data: PersonCreateOneInput;
};


export type MutationCreateShowArgs = {
  data: ShowCreateOneInput;
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


export type MutationRemoveAttachmentsArgs = {
  where: AttachmentFindManyInput;
};


export type MutationRemoveMoviesArgs = {
  where: MovieFindManyInput;
};


export type MutationRemovePeopleArgs = {
  where: PersonFindManyInput;
};


export type MutationRemoveShowsArgs = {
  where: ShowFindManyInput;
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


export type MutationUpdateAttachmentArgs = {
  data: AttachmentUpdateOneInput;
  where: AttachmentFindOneInput;
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


export type MutationUpdateShowArgs = {
  data: ShowUpdateOneInput;
  where: ShowFindOneInput;
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
  and?: InputMaybe<Array<InputMaybe<PersonFindManyInput>>>;
  birthDate?: InputMaybe<DateNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deathDate?: InputMaybe<DateNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nameFirst?: InputMaybe<StringFilter>;
  nameLast?: InputMaybe<StringFilter>;
  nameMiddle?: InputMaybe<StringFilter>;
  nameSort?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<InputMaybe<PersonFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<PersonFindManyInput>>>;
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
};

export type Query = {
  attachment?: Maybe<Attachment>;
  attachments: Array<Attachment>;
  movie?: Maybe<Movie>;
  movieRole?: Maybe<MovieRole>;
  movieRoles: Array<MovieRole>;
  movies: Array<Movie>;
  people: Array<Person>;
  person?: Maybe<Person>;
  show?: Maybe<Show>;
  shows: Array<Show>;
  studio?: Maybe<Studio>;
  studios: Array<Studio>;
  tag?: Maybe<Tag>;
  tagCategories: Array<TagCategory>;
  tagCategory?: Maybe<TagCategory>;
  tags: Array<Tag>;
  unit?: Maybe<Unit>;
  units: Array<Unit>;
};


export type QueryAttachmentArgs = {
  where: AttachmentFindOneInput;
};


export type QueryAttachmentsArgs = {
  orderBy?: InputMaybe<Array<AttachmentOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<AttachmentFindManyInput>;
};


export type QueryMovieArgs = {
  where: MovieFindOneInput;
};


export type QueryMovieRoleArgs = {
  where: MovieRoleFindOneInput;
};


export type QueryMovieRolesArgs = {
  orderBy?: InputMaybe<Array<MovieRoleOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<MovieRoleFindManyInput>;
};


export type QueryMoviesArgs = {
  orderBy?: InputMaybe<Array<MovieOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<MovieFindManyInput>;
};


export type QueryPeopleArgs = {
  orderBy?: InputMaybe<Array<PersonOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<PersonFindManyInput>;
};


export type QueryPersonArgs = {
  where: PersonFindOneInput;
};


export type QueryShowArgs = {
  where: ShowFindOneInput;
};


export type QueryShowsArgs = {
  orderBy?: InputMaybe<Array<ShowOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<ShowFindManyInput>;
};


export type QueryStudioArgs = {
  where: StudioFindOneInput;
};


export type QueryStudiosArgs = {
  orderBy?: InputMaybe<Array<StudioOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<StudioFindManyInput>;
};


export type QueryTagArgs = {
  where: TagFindOneInput;
};


export type QueryTagCategoriesArgs = {
  orderBy?: InputMaybe<Array<TagCategoryOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<TagCategoryFindManyInput>;
};


export type QueryTagCategoryArgs = {
  where: TagCategoryFindOneInput;
};


export type QueryTagsArgs = {
  orderBy?: InputMaybe<Array<TagOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<TagFindManyInput>;
};


export type QueryUnitArgs = {
  where: UnitFindOneInput;
};


export type QueryUnitsArgs = {
  orderBy?: InputMaybe<Array<UnitOrderByInput>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<UnitFindManyInput>;
};

export type Show = {
  _id: Scalars['ID'];
  airedDate?: Maybe<Scalars['Date']>;
  contentRating: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  nameSort: Scalars['String'];
  rating?: Maybe<Scalars['Decimal']>;
  studio: Array<Studio>;
  tagline: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShowCreateOneInput = {
  airedDate?: InputMaybe<Scalars['Date']>;
  contentRating: Scalars['String'];
  description?: Scalars['String'];
  name: Scalars['String'];
  nameSort: Scalars['String'];
  rating?: InputMaybe<Scalars['Decimal']>;
  studioIds?: Array<Scalars['UUID']>;
  tagline?: Scalars['String'];
};

export type ShowFindManyInput = {
  airedDate?: InputMaybe<DateNullableFilter>;
  and?: InputMaybe<Array<InputMaybe<ShowFindManyInput>>>;
  contentRating?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nameSort?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<InputMaybe<ShowFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<ShowFindManyInput>>>;
  rating?: InputMaybe<DecimalNullableFilter>;
  tagline?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ShowFindOneInput = {
  id: Scalars['UUID'];
};

export type ShowOrderByInput = {
  airedDate?: InputMaybe<SortOrder>;
  contentRating?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nameSort?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShowUpdateOneInput = {
  airedDate?: InputMaybe<Scalars['Date']>;
  contentRating?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nameSort?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Decimal']>;
  studioIds?: InputMaybe<Array<Scalars['UUID']>>;
  tagline?: InputMaybe<Scalars['String']>;
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
  movies: Array<Movie>;
  name: Scalars['String'];
  shows: Array<Show>;
  updatedAt: Scalars['DateTime'];
};


export type StudioMoviesArgs = {
  orderBy?: InputMaybe<Array<MovieOrderByInput>>;
};


export type StudioShowsArgs = {
  orderBy?: InputMaybe<Array<ShowOrderByInput>>;
};

export type StudioCreateOneInput = {
  description?: Scalars['String'];
  name: Scalars['String'];
};

export type StudioFindManyInput = {
  and?: InputMaybe<Array<InputMaybe<StudioFindManyInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<InputMaybe<StudioFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<StudioFindManyInput>>>;
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
  attachments: Array<Attachment>;
  category: TagCategory;
  categoryId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  movies: Array<Movie>;
  name: Scalars['String'];
  people: Array<Person>;
  units: Array<Unit>;
  updatedAt: Scalars['DateTime'];
};


export type TagAttachmentsArgs = {
  orderBy?: InputMaybe<Array<AttachmentOrderByInput>>;
};


export type TagMoviesArgs = {
  orderBy?: InputMaybe<Array<MovieOrderByInput>>;
};


export type TagPeopleArgs = {
  orderBy?: InputMaybe<Array<PersonOrderByInput>>;
};


export type TagUnitsArgs = {
  orderBy?: InputMaybe<Array<UnitOrderByInput>>;
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
  and?: InputMaybe<Array<InputMaybe<TagCategoryFindManyInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<InputMaybe<TagCategoryFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<TagCategoryFindManyInput>>>;
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
  and?: InputMaybe<Array<InputMaybe<TagFindManyInput>>>;
  categoryId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<InputMaybe<TagFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<TagFindManyInput>>>;
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
  and?: InputMaybe<Array<InputMaybe<UnitFindManyInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  not?: InputMaybe<Array<InputMaybe<UnitFindManyInput>>>;
  or?: InputMaybe<Array<InputMaybe<UnitFindManyInput>>>;
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
  name?: InputMaybe<Scalars['String']>;
};

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

export type PeopleQueryVariables = Exact<{
  where: PersonFindManyInput;
}>;


export type PeopleQuery = { people: Array<{ id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string }> };

export type PersonQueryVariables = Exact<{
  where: PersonFindOneInput;
}>;


export type PersonQuery = { person?: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string } | null | undefined };

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

export type StudioQueryVariables = Exact<{
  where: StudioFindOneInput;
}>;


export type StudioQuery = { studio?: { id: string, name: string, description: string, updatedAt: string, createdAt: string } | null | undefined };

export type StudiosQueryVariables = Exact<{
  where: StudioFindManyInput;
}>;


export type StudiosQuery = { studios: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }> };

export type TagCategoriesQueryVariables = Exact<{
  where: TagCategoryFindManyInput;
}>;


export type TagCategoriesQuery = { tagCategories: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }> }> };

export type TagCategoryQueryVariables = Exact<{
  where: TagCategoryFindOneInput;
}>;


export type TagCategoryQuery = { tagCategory?: { id: string, name: string, description: string, updatedAt: string, createdAt: string, tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string }> } | null | undefined };

export type TagQueryVariables = Exact<{
  where: TagFindOneInput;
}>;


export type TagQuery = { tag?: { id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } } | null | undefined };

export type TagsQueryVariables = Exact<{
  where: TagFindManyInput;
}>;


export type TagsQuery = { tags: Array<{ id: string, name: string, description: string, updatedAt: string, createdAt: string, category: { id: string, name: string, description: string, updatedAt: string, createdAt: string } }> };

export type UpdatePersonMutationVariables = Exact<{
  data: PersonUpdateOneInput;
  where: PersonFindOneInput;
}>;


export type UpdatePersonMutation = { updatePerson: { id: string, birthDate?: string | null | undefined, createdAt: string, deathDate?: string | null | undefined, description: string, nameFirst: string, nameLast: string, nameMiddle: string, nameSort: string, sex: string, updatedAt: string } };

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
export const PeopleDocument = gql`
    query people($where: PersonFindManyInput!) {
  people(where: $where) {
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
export const PersonDocument = gql`
    query person($where: PersonFindOneInput!) {
  person(where: $where) {
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
export const StudioDocument = gql`
    query studio($where: StudioFindOneInput!) {
  studio(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const StudiosDocument = gql`
    query studios($where: StudioFindManyInput!) {
  studios(where: $where) {
    id
    name
    description
    updatedAt
    createdAt
  }
}
    `;
export const TagCategoriesDocument = gql`
    query tagCategories($where: TagCategoryFindManyInput!) {
  tagCategories(where: $where) {
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
export const TagCategoryDocument = gql`
    query tagCategory($where: TagCategoryFindOneInput!) {
  tagCategory(where: $where) {
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
export const TagDocument = gql`
    query tag($where: TagFindOneInput!) {
  tag(where: $where) {
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
export const TagsDocument = gql`
    query tags($where: TagFindManyInput!) {
  tags(where: $where) {
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
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
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
    people(variables: PeopleQueryVariables, options?: C): Promise<{ data?: PeopleQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<PeopleQuery, PeopleQueryVariables>(PeopleDocument, variables, options);
    },
    person(variables: PersonQueryVariables, options?: C): Promise<{ data?: PersonQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<PersonQuery, PersonQueryVariables>(PersonDocument, variables, options);
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
    studio(variables: StudioQueryVariables, options?: C): Promise<{ data?: StudioQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<StudioQuery, StudioQueryVariables>(StudioDocument, variables, options);
    },
    studios(variables: StudiosQueryVariables, options?: C): Promise<{ data?: StudiosQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<StudiosQuery, StudiosQueryVariables>(StudiosDocument, variables, options);
    },
    tagCategories(variables: TagCategoriesQueryVariables, options?: C): Promise<{ data?: TagCategoriesQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<TagCategoriesQuery, TagCategoriesQueryVariables>(TagCategoriesDocument, variables, options);
    },
    tagCategory(variables: TagCategoryQueryVariables, options?: C): Promise<{ data?: TagCategoryQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<TagCategoryQuery, TagCategoryQueryVariables>(TagCategoryDocument, variables, options);
    },
    tag(variables: TagQueryVariables, options?: C): Promise<{ data?: TagQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<TagQuery, TagQueryVariables>(TagDocument, variables, options);
    },
    tags(variables: TagsQueryVariables, options?: C): Promise<{ data?: TagsQuery, errors?: Array<{ message: string; extensions?: unknown }>, extensions?: unknown }> {
      return requester<TagsQuery, TagsQueryVariables>(TagsDocument, variables, options);
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
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
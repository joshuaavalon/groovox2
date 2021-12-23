/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { MercuriusContext } from "mercurius"
import type { FileUpload } from "graphql-upload"
import type { MovieRole, Movie, Person, Studio, TagCategory, Tag, Unit } from "@prisma/client"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
    /**
     * The `Decimal` scalar type to represent values
     */
    decimal<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Decimal";
    /**
     * The `Upload` scalar type represents a file upload.
     */
    fileUpload<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Upload";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    time<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Time";
    /**
     * A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
     */
    uuid<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "UUID";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    /**
     * The `Decimal` scalar type to represent values
     */
    decimal<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Decimal";
    /**
     * The `Upload` scalar type represents a file upload.
     */
    fileUpload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    time<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Time";
    /**
     * A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
     */
    uuid<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "UUID";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BooleanFilter: { // input type
    equal: boolean; // Boolean!
  }
  DateNullableFilter: { // input type
    equal?: NexusGenScalars['Date'] | null; // Date
    gt?: NexusGenScalars['Date'] | null; // Date
    gte?: NexusGenScalars['Date'] | null; // Date
    in?: NexusGenScalars['Date'][] | null; // [Date!]
    lt?: NexusGenScalars['Date'] | null; // Date
    lte?: NexusGenScalars['Date'] | null; // Date
    not?: NexusGenInputs['DateNullableFilter'] | null; // DateNullableFilter
    notIn?: NexusGenScalars['Date'][] | null; // [Date!]
  }
  DateTimeFilter: { // input type
    equal?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  DecimalNullableFilter: { // input type
    equal?: NexusGenScalars['Decimal'] | null; // Decimal
    gt?: NexusGenScalars['Decimal'] | null; // Decimal
    gte?: NexusGenScalars['Decimal'] | null; // Decimal
    in?: NexusGenScalars['Decimal'][] | null; // [Decimal!]
    lt?: NexusGenScalars['Decimal'] | null; // Decimal
    lte?: NexusGenScalars['Decimal'] | null; // Decimal
    not?: NexusGenInputs['DecimalNullableFilter'] | null; // DecimalNullableFilter
    notIn?: NexusGenScalars['Decimal'][] | null; // [Decimal!]
  }
  MovieCreateOneInput: { // input type
    airedDate?: NexusGenScalars['Date'] | null; // Date
    alias: string[]; // [String!]!
    contentRating: string; // String!
    description: string; // String!
    name: string; // String!
    nameSort: string; // String!
    rating?: NexusGenScalars['Decimal'] | null; // Decimal
    roles: NexusGenInputs['MovieRoleCreateOneInput'][]; // [MovieRoleCreateOneInput!]!
    studioIds: NexusGenScalars['UUID'][]; // [UUID!]!
    tagline: string; // String!
  }
  MovieFindManyInput: { // input type
    airedDate?: NexusGenInputs['DateNullableFilter'] | null; // DateNullableFilter
    and?: NexusGenInputs['MovieFindManyInput'][] | null; // [MovieFindManyInput!]
    contentRating?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    nameSort?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: NexusGenInputs['MovieFindManyInput'][] | null; // [MovieFindManyInput!]
    or?: NexusGenInputs['MovieFindManyInput'][] | null; // [MovieFindManyInput!]
    rating?: NexusGenInputs['DecimalNullableFilter'] | null; // DecimalNullableFilter
    tagline?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  MovieFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  MovieOrderByInput: { // input type
    airedDate?: NexusGenEnums['SortOrder'] | null; // SortOrder
    contentRating?: NexusGenEnums['SortOrder'] | null; // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    nameSort?: NexusGenEnums['SortOrder'] | null; // SortOrder
    rating?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  MovieRoleCreateOneInput: { // input type
    movieId: NexusGenScalars['UUID']; // UUID!
    personId: NexusGenScalars['UUID']; // UUID!
    role: string; // String!
    type: string; // String!
  }
  MovieRoleFindManyInput: { // input type
    and?: NexusGenInputs['MovieRoleFindManyInput'][] | null; // [MovieRoleFindManyInput!]
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    movieId?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    not?: NexusGenInputs['MovieRoleFindManyInput'][] | null; // [MovieRoleFindManyInput!]
    or?: NexusGenInputs['MovieRoleFindManyInput'][] | null; // [MovieRoleFindManyInput!]
    personId?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    role?: NexusGenInputs['StringFilter'] | null; // StringFilter
    type?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  MovieRoleFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  MovieRoleOrderByInput: { // input type
    role?: NexusGenEnums['SortOrder'] | null; // SortOrder
    sequence?: NexusGenEnums['SortOrder'] | null; // SortOrder
    type?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  MovieRoleUpdateOneInput: { // input type
    personId?: NexusGenScalars['UUID'] | null; // UUID
    role?: string | null; // String
    type?: string | null; // String
  }
  MovieUpdateOneInput: { // input type
    airedDate?: NexusGenScalars['Date'] | null; // Date
    alias?: string[] | null; // [String!]
    contentRating?: string | null; // String
    description?: string | null; // String
    name?: string | null; // String
    nameSort?: string | null; // String
    rating?: NexusGenScalars['Decimal'] | null; // Decimal
    roles: NexusGenInputs['MovieRoleCreateOneInput'][] | null; // [MovieRoleCreateOneInput!]
    studioIds?: NexusGenScalars['UUID'][] | null; // [UUID!]
    tagline?: string | null; // String
  }
  Pagination: { // input type
    skip?: number | null; // Int
    take?: number | null; // Int
  }
  PersonCreateOneInput: { // input type
    birthDate?: NexusGenScalars['Date'] | null; // Date
    deathDate?: NexusGenScalars['Date'] | null; // Date
    description: string; // String!
    nameFirst: string; // String!
    nameLast: string; // String!
    nameMiddle: string; // String!
    nameSort: string; // String!
    sex: string; // String!
  }
  PersonFindManyInput: { // input type
    and?: NexusGenInputs['PersonFindManyInput'][] | null; // [PersonFindManyInput!]
    birthDate?: NexusGenInputs['DateNullableFilter'] | null; // DateNullableFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    deathDate?: NexusGenInputs['DateNullableFilter'] | null; // DateNullableFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    nameFirst?: NexusGenInputs['StringFilter'] | null; // StringFilter
    nameLast?: NexusGenInputs['StringFilter'] | null; // StringFilter
    nameMiddle?: NexusGenInputs['StringFilter'] | null; // StringFilter
    nameSort?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: NexusGenInputs['PersonFindManyInput'][] | null; // [PersonFindManyInput!]
    or?: NexusGenInputs['PersonFindManyInput'][] | null; // [PersonFindManyInput!]
    sex?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  PersonFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  PersonOrderByInput: { // input type
    birthDate?: NexusGenEnums['SortOrder'] | null; // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    deathDate?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    nameFirst?: NexusGenEnums['SortOrder'] | null; // SortOrder
    nameLast?: NexusGenEnums['SortOrder'] | null; // SortOrder
    nameMiddle?: NexusGenEnums['SortOrder'] | null; // SortOrder
    nameSort?: NexusGenEnums['SortOrder'] | null; // SortOrder
    sex?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  PersonUpdateOneInput: { // input type
    birthDate?: NexusGenScalars['Date'] | null; // Date
    deathDate?: NexusGenScalars['Date'] | null; // Date
    description?: string | null; // String
    nameFirst?: string | null; // String
    nameLast?: string | null; // String
    nameMiddle?: string | null; // String
    nameSort?: string | null; // String
    sex?: string | null; // String
    tagIds?: NexusGenScalars['UUID'][] | null; // [UUID!]
    unitIds?: NexusGenScalars['UUID'][] | null; // [UUID!]
  }
  StringFilter: { // input type
    contain?: string | null; // String
    endWith?: string | null; // String
    equal?: string | null; // String
    in?: string[] | null; // [String!]
    not?: NexusGenInputs['StringFilter'] | null; // StringFilter
    notIn?: string[] | null; // [String!]
    startWith?: string | null; // String
  }
  StudioCreateOneInput: { // input type
    description: string; // String!
    name: string; // String!
  }
  StudioFindManyInput: { // input type
    and?: NexusGenInputs['StudioFindManyInput'][] | null; // [StudioFindManyInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: NexusGenInputs['StudioFindManyInput'][] | null; // [StudioFindManyInput!]
    or?: NexusGenInputs['StudioFindManyInput'][] | null; // [StudioFindManyInput!]
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  StudioFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  StudioOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  StudioUpdateOneInput: { // input type
    description?: string | null; // String
    name?: string | null; // String
  }
  TagCategoryCreateOneInput: { // input type
    description: string; // String!
    name: string; // String!
  }
  TagCategoryFindManyInput: { // input type
    and?: NexusGenInputs['TagCategoryFindManyInput'][] | null; // [TagCategoryFindManyInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: NexusGenInputs['TagCategoryFindManyInput'][] | null; // [TagCategoryFindManyInput!]
    or?: NexusGenInputs['TagCategoryFindManyInput'][] | null; // [TagCategoryFindManyInput!]
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  TagCategoryFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  TagCategoryOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  TagCategoryUpdateOneInput: { // input type
    description?: string | null; // String
    name?: string | null; // String
  }
  TagCreateOneInput: { // input type
    categoryId: NexusGenScalars['UUID']; // UUID!
    description: string; // String!
    name: string; // String!
  }
  TagFindManyInput: { // input type
    and?: NexusGenInputs['TagFindManyInput'][] | null; // [TagFindManyInput!]
    categoryId?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: NexusGenInputs['TagFindManyInput'][] | null; // [TagFindManyInput!]
    or?: NexusGenInputs['TagFindManyInput'][] | null; // [TagFindManyInput!]
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  TagFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  TagOrderByInput: { // input type
    categoryId?: NexusGenEnums['SortOrder'] | null; // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  TagUpdateOneInput: { // input type
    categoryId?: NexusGenScalars['UUID'] | null; // UUID
    description?: string | null; // String
    name?: string | null; // String
  }
  UUIDFilter: { // input type
    equal?: string | null; // String
    in?: string[] | null; // [String!]
    not?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    notIn?: string[] | null; // [String!]
  }
  UnitCreateOneInput: { // input type
    description: string; // String!
    name: string; // String!
  }
  UnitFindManyInput: { // input type
    and?: NexusGenInputs['UnitFindManyInput'][] | null; // [UnitFindManyInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: NexusGenInputs['UnitFindManyInput'][] | null; // [UnitFindManyInput!]
    or?: NexusGenInputs['UnitFindManyInput'][] | null; // [UnitFindManyInput!]
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  UnitFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  UnitOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  UnitUpdateOneInput: { // input type
    description?: string | null; // String
    memberIds?: NexusGenScalars['UUID'][] | null; // [UUID!]
    name?: string | null; // String
    tagIds?: NexusGenScalars['UUID'][] | null; // [UUID!]
  }
}

export interface NexusGenEnums {
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: Date
  DateTime: Date
  Decimal: number
  Time: Date
  UUID: string
  Upload: FileUpload
}

export interface NexusGenObjects {
  AffectedRowsOutput: { // root type
    count: number; // Int!
  }
  Movie: Movie;
  MovieRole: MovieRole;
  Mutation: {};
  Person: Person;
  Query: {};
  Studio: Studio;
  Tag: Tag;
  TagCategory: TagCategory;
  Unit: Unit;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AffectedRowsOutput: { // field return type
    count: number; // Int!
  }
  Movie: { // field return type
    _id: string; // ID!
    airedDate: NexusGenScalars['Date'] | null; // Date
    alias: string[]; // [String!]!
    contentRating: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    name: string; // String!
    nameSort: string; // String!
    rating: NexusGenScalars['Decimal'] | null; // Decimal
    roles: NexusGenRootTypes['MovieRole'][]; // [MovieRole!]!
    studios: NexusGenRootTypes['Studio'][]; // [Studio!]!
    tagline: string; // String!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  MovieRole: { // field return type
    _id: string; // ID!
    id: NexusGenScalars['UUID']; // UUID!
    movie: NexusGenRootTypes['Movie']; // Movie!
    person: NexusGenRootTypes['Person']; // Person!
    role: string; // String!
    type: string; // String!
  }
  Mutation: { // field return type
    createMovie: NexusGenRootTypes['Movie']; // Movie!
    createPerson: NexusGenRootTypes['Person']; // Person!
    createStudio: NexusGenRootTypes['Studio']; // Studio!
    createTag: NexusGenRootTypes['Tag']; // Tag!
    createTagCategory: NexusGenRootTypes['TagCategory']; // TagCategory!
    createUnit: NexusGenRootTypes['Unit']; // Unit!
    removeMovies: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removePeople: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeStudios: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeTagCategories: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeTags: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeUnits: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    updateMovie: NexusGenRootTypes['Movie']; // Movie!
    updateMovieRole: NexusGenRootTypes['MovieRole']; // MovieRole!
    updatePerson: NexusGenRootTypes['Person']; // Person!
    updateStudio: NexusGenRootTypes['Studio']; // Studio!
    updateTag: NexusGenRootTypes['Tag']; // Tag!
    updateTagCategory: NexusGenRootTypes['TagCategory']; // TagCategory!
    updateUnit: NexusGenRootTypes['Unit']; // Unit!
  }
  Person: { // field return type
    _id: string; // ID!
    birthDate: NexusGenScalars['Date'] | null; // Date
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    deathDate: NexusGenScalars['Date'] | null; // Date
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    nameFirst: string; // String!
    nameLast: string; // String!
    nameMiddle: string; // String!
    nameSort: string; // String!
    sex: string; // String!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    units: NexusGenRootTypes['Unit'][]; // [Unit!]!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Query: { // field return type
    findMovie: NexusGenRootTypes['Movie'] | null; // Movie
    findMovieRole: NexusGenRootTypes['MovieRole'] | null; // MovieRole
    findMovieRoles: NexusGenRootTypes['MovieRole'][]; // [MovieRole!]!
    findMovies: NexusGenRootTypes['Movie'][]; // [Movie!]!
    findPeople: NexusGenRootTypes['Person'][]; // [Person!]!
    findPerson: NexusGenRootTypes['Person'] | null; // Person
    findStudio: NexusGenRootTypes['Studio'] | null; // Studio
    findStudios: NexusGenRootTypes['Studio'][]; // [Studio!]!
    findTag: NexusGenRootTypes['Tag'] | null; // Tag
    findTagCategories: NexusGenRootTypes['TagCategory'][]; // [TagCategory!]!
    findTagCategory: NexusGenRootTypes['TagCategory'] | null; // TagCategory
    findTags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    findUnit: NexusGenRootTypes['Unit'] | null; // Unit
    findUnits: NexusGenRootTypes['Unit'][]; // [Unit!]!
  }
  Studio: { // field return type
    _id: string; // ID!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Tag: { // field return type
    _id: string; // ID!
    category: NexusGenRootTypes['TagCategory']; // TagCategory!
    categoryId: NexusGenScalars['UUID']; // UUID!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  TagCategory: { // field return type
    _id: string; // ID!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    name: string; // String!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Unit: { // field return type
    _id: string; // ID!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    members: NexusGenRootTypes['Person'][]; // [Person!]!
    name: string; // String!
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  AffectedRowsOutput: { // field return type name
    count: 'Int'
  }
  Movie: { // field return type name
    _id: 'ID'
    airedDate: 'Date'
    alias: 'String'
    contentRating: 'String'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    name: 'String'
    nameSort: 'String'
    rating: 'Decimal'
    roles: 'MovieRole'
    studios: 'Studio'
    tagline: 'String'
    tags: 'Tag'
    updatedAt: 'DateTime'
  }
  MovieRole: { // field return type name
    _id: 'ID'
    id: 'UUID'
    movie: 'Movie'
    person: 'Person'
    role: 'String'
    type: 'String'
  }
  Mutation: { // field return type name
    createMovie: 'Movie'
    createPerson: 'Person'
    createStudio: 'Studio'
    createTag: 'Tag'
    createTagCategory: 'TagCategory'
    createUnit: 'Unit'
    removeMovies: 'AffectedRowsOutput'
    removePeople: 'AffectedRowsOutput'
    removeStudios: 'AffectedRowsOutput'
    removeTagCategories: 'AffectedRowsOutput'
    removeTags: 'AffectedRowsOutput'
    removeUnits: 'AffectedRowsOutput'
    updateMovie: 'Movie'
    updateMovieRole: 'MovieRole'
    updatePerson: 'Person'
    updateStudio: 'Studio'
    updateTag: 'Tag'
    updateTagCategory: 'TagCategory'
    updateUnit: 'Unit'
  }
  Person: { // field return type name
    _id: 'ID'
    birthDate: 'Date'
    createdAt: 'DateTime'
    deathDate: 'Date'
    description: 'String'
    id: 'UUID'
    nameFirst: 'String'
    nameLast: 'String'
    nameMiddle: 'String'
    nameSort: 'String'
    sex: 'String'
    tags: 'Tag'
    units: 'Unit'
    updatedAt: 'DateTime'
  }
  Query: { // field return type name
    findMovie: 'Movie'
    findMovieRole: 'MovieRole'
    findMovieRoles: 'MovieRole'
    findMovies: 'Movie'
    findPeople: 'Person'
    findPerson: 'Person'
    findStudio: 'Studio'
    findStudios: 'Studio'
    findTag: 'Tag'
    findTagCategories: 'TagCategory'
    findTagCategory: 'TagCategory'
    findTags: 'Tag'
    findUnit: 'Unit'
    findUnits: 'Unit'
  }
  Studio: { // field return type name
    _id: 'ID'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    name: 'String'
    updatedAt: 'DateTime'
  }
  Tag: { // field return type name
    _id: 'ID'
    category: 'TagCategory'
    categoryId: 'UUID'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    name: 'String'
    updatedAt: 'DateTime'
  }
  TagCategory: { // field return type name
    _id: 'ID'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    name: 'String'
    tags: 'Tag'
    updatedAt: 'DateTime'
  }
  Unit: { // field return type name
    _id: 'ID'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    members: 'Person'
    name: 'String'
    tags: 'Tag'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Movie: {
    studios: { // args
      orderBy?: NexusGenInputs['StudioOrderByInput'][] | null; // [StudioOrderByInput!]
    }
    tags: { // args
      orderBy?: NexusGenInputs['TagOrderByInput'][] | null; // [TagOrderByInput!]
    }
  }
  Mutation: {
    createMovie: { // args
      data: NexusGenInputs['MovieCreateOneInput']; // MovieCreateOneInput!
    }
    createPerson: { // args
      data: NexusGenInputs['PersonCreateOneInput']; // PersonCreateOneInput!
    }
    createStudio: { // args
      data: NexusGenInputs['StudioCreateOneInput']; // StudioCreateOneInput!
    }
    createTag: { // args
      data: NexusGenInputs['TagCreateOneInput']; // TagCreateOneInput!
    }
    createTagCategory: { // args
      data: NexusGenInputs['TagCategoryCreateOneInput']; // TagCategoryCreateOneInput!
    }
    createUnit: { // args
      data: NexusGenInputs['UnitCreateOneInput']; // UnitCreateOneInput!
    }
    removeMovies: { // args
      where: NexusGenInputs['MovieFindManyInput']; // MovieFindManyInput!
    }
    removePeople: { // args
      where: NexusGenInputs['PersonFindManyInput']; // PersonFindManyInput!
    }
    removeStudios: { // args
      where: NexusGenInputs['StudioFindManyInput']; // StudioFindManyInput!
    }
    removeTagCategories: { // args
      where: NexusGenInputs['TagCategoryFindManyInput']; // TagCategoryFindManyInput!
    }
    removeTags: { // args
      where: NexusGenInputs['TagFindManyInput']; // TagFindManyInput!
    }
    removeUnits: { // args
      where: NexusGenInputs['UnitFindManyInput']; // UnitFindManyInput!
    }
    updateMovie: { // args
      data: NexusGenInputs['MovieUpdateOneInput']; // MovieUpdateOneInput!
      where: NexusGenInputs['MovieFindOneInput']; // MovieFindOneInput!
    }
    updateMovieRole: { // args
      data: NexusGenInputs['MovieRoleUpdateOneInput']; // MovieRoleUpdateOneInput!
      where: NexusGenInputs['MovieRoleFindOneInput']; // MovieRoleFindOneInput!
    }
    updatePerson: { // args
      data: NexusGenInputs['PersonUpdateOneInput']; // PersonUpdateOneInput!
      where: NexusGenInputs['PersonFindOneInput']; // PersonFindOneInput!
    }
    updateStudio: { // args
      data: NexusGenInputs['StudioUpdateOneInput']; // StudioUpdateOneInput!
      where: NexusGenInputs['StudioFindOneInput']; // StudioFindOneInput!
    }
    updateTag: { // args
      data: NexusGenInputs['TagUpdateOneInput']; // TagUpdateOneInput!
      where: NexusGenInputs['TagFindOneInput']; // TagFindOneInput!
    }
    updateTagCategory: { // args
      data: NexusGenInputs['TagCategoryUpdateOneInput']; // TagCategoryUpdateOneInput!
      where: NexusGenInputs['TagCategoryFindOneInput']; // TagCategoryFindOneInput!
    }
    updateUnit: { // args
      data: NexusGenInputs['UnitUpdateOneInput']; // UnitUpdateOneInput!
      where: NexusGenInputs['UnitFindOneInput']; // UnitFindOneInput!
    }
  }
  Query: {
    findMovie: { // args
      where: NexusGenInputs['MovieFindOneInput']; // MovieFindOneInput!
    }
    findMovieRole: { // args
      where: NexusGenInputs['MovieRoleFindOneInput']; // MovieRoleFindOneInput!
    }
    findMovieRoles: { // args
      orderBy?: NexusGenInputs['MovieRoleOrderByInput'][] | null; // [MovieRoleOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['MovieRoleFindManyInput'] | null; // MovieRoleFindManyInput
    }
    findMovies: { // args
      orderBy?: NexusGenInputs['MovieOrderByInput'][] | null; // [MovieOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['MovieFindManyInput'] | null; // MovieFindManyInput
    }
    findPeople: { // args
      orderBy?: NexusGenInputs['PersonOrderByInput'][] | null; // [PersonOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['PersonFindManyInput'] | null; // PersonFindManyInput
    }
    findPerson: { // args
      where: NexusGenInputs['PersonFindOneInput']; // PersonFindOneInput!
    }
    findStudio: { // args
      where: NexusGenInputs['StudioFindOneInput']; // StudioFindOneInput!
    }
    findStudios: { // args
      orderBy?: NexusGenInputs['StudioOrderByInput'][] | null; // [StudioOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['StudioFindManyInput'] | null; // StudioFindManyInput
    }
    findTag: { // args
      where: NexusGenInputs['TagFindOneInput']; // TagFindOneInput!
    }
    findTagCategories: { // args
      orderBy?: NexusGenInputs['TagCategoryOrderByInput'][] | null; // [TagCategoryOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['TagCategoryFindManyInput'] | null; // TagCategoryFindManyInput
    }
    findTagCategory: { // args
      where: NexusGenInputs['TagCategoryFindOneInput']; // TagCategoryFindOneInput!
    }
    findTags: { // args
      orderBy?: NexusGenInputs['TagOrderByInput'][] | null; // [TagOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['TagFindManyInput'] | null; // TagFindManyInput
    }
    findUnit: { // args
      where: NexusGenInputs['UnitFindOneInput']; // UnitFindOneInput!
    }
    findUnits: { // args
      orderBy?: NexusGenInputs['UnitOrderByInput'][] | null; // [UnitOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['UnitFindManyInput'] | null; // UnitFindManyInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: MercuriusContext;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    /**
     * The complexity for an individual field. Return a number
     * or a function that returns a number to specify the
     * complexity for this field.
     */
    complexity?: QueryComplexity<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
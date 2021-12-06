/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { GraphqlContext } from "./context"
import type { FileUpload } from "graphql-upload"
import type { Attachment, Movie, Person, Studio, Tag, TagCategory, Unit } from "@prisma/client"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
import type { FieldSchemaResolver } from "@groovox/nexus-ajv"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
     */
    uuid<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "UUID";
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    time<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Time";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * The `Decimal` scalar type to represent values
     */
    decimal<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Decimal";
    /**
     * The `Upload` scalar type represents a file upload.
     */
    file<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Upload";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
     */
    uuid<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "UUID";
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    time<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Time";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * The `Decimal` scalar type to represent values
     */
    decimal<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Decimal";
    /**
     * The `Upload` scalar type represents a file upload.
     */
    file<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AttachmentCreateOneInput: { // input type
    description: string; // String!
    file: NexusGenScalars['Upload']; // Upload!
    type: string; // String!
  }
  AttachmentFindManyInput: { // input type
    and?: Array<NexusGenInputs['AttachmentFindManyInput'] | null> | null; // [AttachmentFindManyInput]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    not?: Array<NexusGenInputs['AttachmentFindManyInput'] | null> | null; // [AttachmentFindManyInput]
    or?: Array<NexusGenInputs['AttachmentFindManyInput'] | null> | null; // [AttachmentFindManyInput]
    tag?: NexusGenInputs['TagFindManyInput'] | null; // TagFindManyInput
    type?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  AttachmentFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  AttachmentOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    type?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  AttachmentUpdateOneInput: { // input type
    description?: string | null; // String
    type?: string | null; // String
  }
  BooleanFilter: { // input type
    equal?: boolean | null; // Boolean
    not?: NexusGenInputs['BooleanFilter'] | null; // BooleanFilter
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
  DecimalFilter: { // input type
    equal?: NexusGenScalars['Decimal'] | null; // Decimal
    gt?: NexusGenScalars['Decimal'] | null; // Decimal
    gte?: NexusGenScalars['Decimal'] | null; // Decimal
    in?: NexusGenScalars['Decimal'][] | null; // [Decimal!]
    lt?: NexusGenScalars['Decimal'] | null; // Decimal
    lte?: NexusGenScalars['Decimal'] | null; // Decimal
    not?: NexusGenInputs['DecimalFilter'] | null; // DecimalFilter
    notIn?: NexusGenScalars['Decimal'][] | null; // [Decimal!]
  }
  DecimalNullableFilter: { // input type
    equal?: NexusGenScalars['Decimal'] | null; // Decimal
    gt?: NexusGenScalars['Decimal'] | null; // Decimal
    gte?: NexusGenScalars['Decimal'] | null; // Decimal
    in?: NexusGenScalars['Decimal'][] | null; // [Decimal!]
    lt?: NexusGenScalars['Decimal'] | null; // Decimal
    lte?: NexusGenScalars['Decimal'] | null; // Decimal
    not?: NexusGenInputs['DecimalFilter'] | null; // DecimalFilter
    notIn?: NexusGenScalars['Decimal'][] | null; // [Decimal!]
  }
  MovieCreateOneInput: { // input type
    airedDate?: NexusGenScalars['Date'] | null; // Date
    contentRating: string; // String!
    description: string; // String!
    name: string; // String!
    nameSort: string; // String!
    rating?: NexusGenScalars['Decimal'] | null; // Decimal
    studioIds: NexusGenScalars['UUID'][]; // [UUID!]!
    tagline: string; // String!
  }
  MovieFindManyInput: { // input type
    airedDate?: NexusGenInputs['DateNullableFilter'] | null; // DateNullableFilter
    and?: Array<NexusGenInputs['MovieFindManyInput'] | null> | null; // [MovieFindManyInput]
    contentRating?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    nameSort?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: Array<NexusGenInputs['MovieFindManyInput'] | null> | null; // [MovieFindManyInput]
    or?: Array<NexusGenInputs['MovieFindManyInput'] | null> | null; // [MovieFindManyInput]
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
  MovieUpdateOneInput: { // input type
    airedDate?: NexusGenScalars['Date'] | null; // Date
    contentRating?: string | null; // String
    description?: string | null; // String
    name?: string | null; // String
    nameSort?: string | null; // String
    rating?: NexusGenScalars['Decimal'] | null; // Decimal
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
    and?: Array<NexusGenInputs['PersonFindManyInput'] | null> | null; // [PersonFindManyInput]
    birthDate?: NexusGenInputs['DateNullableFilter'] | null; // DateNullableFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    deathDate?: NexusGenInputs['DateNullableFilter'] | null; // DateNullableFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    nameFirst?: NexusGenInputs['StringFilter'] | null; // StringFilter
    nameLast?: NexusGenInputs['StringFilter'] | null; // StringFilter
    nameMiddle?: NexusGenInputs['StringFilter'] | null; // StringFilter
    nameSort?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: Array<NexusGenInputs['PersonFindManyInput'] | null> | null; // [PersonFindManyInput]
    or?: Array<NexusGenInputs['PersonFindManyInput'] | null> | null; // [PersonFindManyInput]
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
    and?: Array<NexusGenInputs['StudioFindManyInput'] | null> | null; // [StudioFindManyInput]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: Array<NexusGenInputs['StudioFindManyInput'] | null> | null; // [StudioFindManyInput]
    or?: Array<NexusGenInputs['StudioFindManyInput'] | null> | null; // [StudioFindManyInput]
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
    and?: Array<NexusGenInputs['TagCategoryFindManyInput'] | null> | null; // [TagCategoryFindManyInput]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: Array<NexusGenInputs['TagCategoryFindManyInput'] | null> | null; // [TagCategoryFindManyInput]
    or?: Array<NexusGenInputs['TagCategoryFindManyInput'] | null> | null; // [TagCategoryFindManyInput]
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
    and?: Array<NexusGenInputs['TagFindManyInput'] | null> | null; // [TagFindManyInput]
    categoryId?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: Array<NexusGenInputs['TagFindManyInput'] | null> | null; // [TagFindManyInput]
    or?: Array<NexusGenInputs['TagFindManyInput'] | null> | null; // [TagFindManyInput]
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
    and?: Array<NexusGenInputs['UnitFindManyInput'] | null> | null; // [UnitFindManyInput]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: Array<NexusGenInputs['UnitFindManyInput'] | null> | null; // [UnitFindManyInput]
    or?: Array<NexusGenInputs['UnitFindManyInput'] | null> | null; // [UnitFindManyInput]
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
    name?: string | null; // String
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
  Attachment: Attachment;
  Movie: Movie;
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
  Attachment: { // field return type
    _id: string; // ID!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    tag: NexusGenRootTypes['Tag'] | null; // Tag
    tagCategoryId: NexusGenScalars['UUID'] | null; // UUID
    tagId: NexusGenScalars['UUID'] | null; // UUID
    type: string; // String!
  }
  Movie: { // field return type
    _id: string; // ID!
    airedDate: NexusGenScalars['Date'] | null; // Date
    contentRating: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    name: string; // String!
    nameSort: string; // String!
    rating: NexusGenScalars['Decimal'] | null; // Decimal
    studio: NexusGenRootTypes['Studio'][]; // [Studio!]!
    tagline: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: { // field return type
    createAttachment: NexusGenRootTypes['Attachment']; // Attachment!
    createMovie: NexusGenRootTypes['Movie']; // Movie!
    createPerson: NexusGenRootTypes['Person']; // Person!
    createStudio: NexusGenRootTypes['Studio']; // Studio!
    createTag: NexusGenRootTypes['Tag']; // Tag!
    createTagCategory: NexusGenRootTypes['TagCategory']; // TagCategory!
    createUnit: NexusGenRootTypes['Unit']; // Unit!
    removeAttachments: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeMovies: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removePeople: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeStudios: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeTagCategories: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeTags: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeUnits: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    updateAttachment: NexusGenRootTypes['Attachment']; // Attachment!
    updateMovie: NexusGenRootTypes['Movie']; // Movie!
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
    attachment: NexusGenRootTypes['Attachment'] | null; // Attachment
    attachments: NexusGenRootTypes['Attachment'][]; // [Attachment!]!
    movie: NexusGenRootTypes['Movie'] | null; // Movie
    movies: NexusGenRootTypes['Movie'][]; // [Movie!]!
    people: NexusGenRootTypes['Person'][]; // [Person!]!
    person: NexusGenRootTypes['Person'] | null; // Person
    studio: NexusGenRootTypes['Studio'] | null; // Studio
    studios: NexusGenRootTypes['Studio'][]; // [Studio!]!
    tag: NexusGenRootTypes['Tag'] | null; // Tag
    tagCategories: NexusGenRootTypes['TagCategory'][]; // [TagCategory!]!
    tagCategory: NexusGenRootTypes['TagCategory'] | null; // TagCategory
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
    unit: NexusGenRootTypes['Unit'] | null; // Unit
    units: NexusGenRootTypes['Unit'][]; // [Unit!]!
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
    attachments: NexusGenRootTypes['Attachment'][]; // [Attachment!]!
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
  Attachment: { // field return type name
    _id: 'ID'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    tag: 'Tag'
    tagCategoryId: 'UUID'
    tagId: 'UUID'
    type: 'String'
  }
  Movie: { // field return type name
    _id: 'ID'
    airedDate: 'Date'
    contentRating: 'String'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    name: 'String'
    nameSort: 'String'
    rating: 'Decimal'
    studio: 'Studio'
    tagline: 'String'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    createAttachment: 'Attachment'
    createMovie: 'Movie'
    createPerson: 'Person'
    createStudio: 'Studio'
    createTag: 'Tag'
    createTagCategory: 'TagCategory'
    createUnit: 'Unit'
    removeAttachments: 'AffectedRowsOutput'
    removeMovies: 'AffectedRowsOutput'
    removePeople: 'AffectedRowsOutput'
    removeStudios: 'AffectedRowsOutput'
    removeTagCategories: 'AffectedRowsOutput'
    removeTags: 'AffectedRowsOutput'
    removeUnits: 'AffectedRowsOutput'
    updateAttachment: 'Attachment'
    updateMovie: 'Movie'
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
    attachment: 'Attachment'
    attachments: 'Attachment'
    movie: 'Movie'
    movies: 'Movie'
    people: 'Person'
    person: 'Person'
    studio: 'Studio'
    studios: 'Studio'
    tag: 'Tag'
    tagCategories: 'TagCategory'
    tagCategory: 'TagCategory'
    tags: 'Tag'
    unit: 'Unit'
    units: 'Unit'
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
    attachments: 'Attachment'
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
  Mutation: {
    createAttachment: { // args
      data: NexusGenInputs['AttachmentCreateOneInput']; // AttachmentCreateOneInput!
    }
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
    removeAttachments: { // args
      where: NexusGenInputs['AttachmentFindManyInput']; // AttachmentFindManyInput!
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
    updateAttachment: { // args
      data: NexusGenInputs['AttachmentUpdateOneInput']; // AttachmentUpdateOneInput!
      where: NexusGenInputs['AttachmentFindOneInput']; // AttachmentFindOneInput!
    }
    updateMovie: { // args
      data: NexusGenInputs['MovieUpdateOneInput']; // MovieUpdateOneInput!
      where: NexusGenInputs['MovieFindOneInput']; // MovieFindOneInput!
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
    attachment: { // args
      where: NexusGenInputs['AttachmentFindOneInput']; // AttachmentFindOneInput!
    }
    attachments: { // args
      orderBy?: NexusGenInputs['AttachmentOrderByInput'][] | null; // [AttachmentOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['AttachmentFindManyInput'] | null; // AttachmentFindManyInput
    }
    movie: { // args
      where: NexusGenInputs['MovieFindOneInput']; // MovieFindOneInput!
    }
    movies: { // args
      orderBy?: NexusGenInputs['MovieOrderByInput'][] | null; // [MovieOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['MovieFindManyInput'] | null; // MovieFindManyInput
    }
    people: { // args
      orderBy?: NexusGenInputs['PersonOrderByInput'][] | null; // [PersonOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['PersonFindManyInput'] | null; // PersonFindManyInput
    }
    person: { // args
      where: NexusGenInputs['PersonFindOneInput']; // PersonFindOneInput!
    }
    studio: { // args
      where: NexusGenInputs['StudioFindOneInput']; // StudioFindOneInput!
    }
    studios: { // args
      orderBy?: NexusGenInputs['StudioOrderByInput'][] | null; // [StudioOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['StudioFindManyInput'] | null; // StudioFindManyInput
    }
    tag: { // args
      where: NexusGenInputs['TagFindOneInput']; // TagFindOneInput!
    }
    tagCategories: { // args
      orderBy?: NexusGenInputs['TagCategoryOrderByInput'][] | null; // [TagCategoryOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['TagCategoryFindManyInput'] | null; // TagCategoryFindManyInput
    }
    tagCategory: { // args
      where: NexusGenInputs['TagCategoryFindOneInput']; // TagCategoryFindOneInput!
    }
    tags: { // args
      orderBy?: NexusGenInputs['TagOrderByInput'][] | null; // [TagOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['TagFindManyInput'] | null; // TagFindManyInput
    }
    unit: { // args
      where: NexusGenInputs['UnitFindOneInput']; // UnitFindOneInput!
    }
    units: { // args
      orderBy?: NexusGenInputs['UnitOrderByInput'][] | null; // [UnitOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['UnitFindManyInput'] | null; // UnitFindManyInput
    }
  }
  Tag: {
    attachments: { // args
      orderBy?: NexusGenInputs['AttachmentOrderByInput'][] | null; // [AttachmentOrderByInput!]
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
  context: GraphqlContext;
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
    /**
     * Schema validation with ajv
     */
    schema?: FieldSchemaResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
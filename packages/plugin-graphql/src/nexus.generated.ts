/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { GraphqlContext } from "./context"
import type { Role, Studio, Tag, TagCategory } from "@prisma/client"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
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
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BooleanFilter: { // input type
    equal?: boolean | null; // Boolean
    not?: NexusGenInputs['BooleanFilter'] | null; // BooleanFilter
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
  Pagination: { // input type
    skip?: number | null; // Int
    take?: number | null; // Int
  }
  RoleCreateOneInput: { // input type
    description: string; // String!
    name: string; // String!
  }
  RoleFindManyInput: { // input type
    and?: Array<NexusGenInputs['RoleFindManyInput'] | null> | null; // [RoleFindManyInput]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['UUIDFilter'] | null; // UUIDFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    not?: Array<NexusGenInputs['RoleFindManyInput'] | null> | null; // [RoleFindManyInput]
    or?: Array<NexusGenInputs['RoleFindManyInput'] | null> | null; // [RoleFindManyInput]
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  RoleFindOneInput: { // input type
    id: NexusGenScalars['UUID']; // UUID!
  }
  RoleOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  RoleUpdateOneInput: { // input type
    description?: string | null; // String
    name?: string | null; // String
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
}

export interface NexusGenObjects {
  AffectedRowsOutput: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Query: {};
  Role: Role;
  Studio: Studio;
  Tag: Tag;
  TagCategory: TagCategory;
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
  Mutation: { // field return type
    createRole: NexusGenRootTypes['Role']; // Role!
    createStudio: NexusGenRootTypes['Studio']; // Studio!
    createTag: NexusGenRootTypes['Tag']; // Tag!
    createTagCategory: NexusGenRootTypes['TagCategory']; // TagCategory!
    removeRoles: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeStudios: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeTagCategories: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    removeTags: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    updateRole: NexusGenRootTypes['Role']; // Role!
    updateStudio: NexusGenRootTypes['Studio']; // Studio!
    updateTag: NexusGenRootTypes['Tag']; // Tag!
    updateTagCategory: NexusGenRootTypes['TagCategory']; // TagCategory!
  }
  Query: { // field return type
    role: NexusGenRootTypes['Role'] | null; // Role
    roles: NexusGenRootTypes['Role'][]; // [Role!]!
    studio: NexusGenRootTypes['Studio'] | null; // Studio
    studios: NexusGenRootTypes['Studio'][]; // [Studio!]!
    tag: NexusGenRootTypes['Tag'] | null; // Tag
    tagCategories: NexusGenRootTypes['TagCategory'][]; // [TagCategory!]!
    tagCategory: NexusGenRootTypes['TagCategory'] | null; // TagCategory
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
  }
  Role: { // field return type
    _id: string; // ID!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
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
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  AffectedRowsOutput: { // field return type name
    count: 'Int'
  }
  Mutation: { // field return type name
    createRole: 'Role'
    createStudio: 'Studio'
    createTag: 'Tag'
    createTagCategory: 'TagCategory'
    removeRoles: 'AffectedRowsOutput'
    removeStudios: 'AffectedRowsOutput'
    removeTagCategories: 'AffectedRowsOutput'
    removeTags: 'AffectedRowsOutput'
    updateRole: 'Role'
    updateStudio: 'Studio'
    updateTag: 'Tag'
    updateTagCategory: 'TagCategory'
  }
  Query: { // field return type name
    role: 'Role'
    roles: 'Role'
    studio: 'Studio'
    studios: 'Studio'
    tag: 'Tag'
    tagCategories: 'TagCategory'
    tagCategory: 'TagCategory'
    tags: 'Tag'
  }
  Role: { // field return type name
    _id: 'ID'
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    name: 'String'
    updatedAt: 'DateTime'
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
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createRole: { // args
      data: NexusGenInputs['RoleCreateOneInput']; // RoleCreateOneInput!
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
    removeRoles: { // args
      where: NexusGenInputs['RoleFindManyInput']; // RoleFindManyInput!
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
    updateRole: { // args
      data: NexusGenInputs['RoleUpdateOneInput']; // RoleUpdateOneInput!
      where: NexusGenInputs['RoleFindOneInput']; // RoleFindOneInput!
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
  }
  Query: {
    role: { // args
      where: NexusGenInputs['RoleFindOneInput']; // RoleFindOneInput!
    }
    roles: { // args
      orderBy?: NexusGenInputs['RoleOrderByInput'][] | null; // [RoleOrderByInput!]
      pagination?: NexusGenInputs['Pagination'] | null; // Pagination
      where?: NexusGenInputs['RoleFindManyInput'] | null; // RoleFindManyInput
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
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
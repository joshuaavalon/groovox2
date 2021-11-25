import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes,
  NexusGenRootTypes
} from "@groovox/graphql-type";

import type { ArrayElement } from "../util";

const query = gql`
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

type Input = {
  where: NexusGenArgTypes["Query"]["tagCategories"]["where"];
};

type Output = {
  tagCategories: (ArrayElement<NexusGenFieldTypes["Query"]["tagCategories"]> & {
    tags: NexusGenRootTypes["Tag"][];
  })[];
};

export const findMany = createEnquiry<Input, Output>(query);

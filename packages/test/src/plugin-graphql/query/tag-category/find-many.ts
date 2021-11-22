import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  query tagCategories($where: TagCategoryFindManyInput!) {
    tagCategories(where: $where) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;

type Input = {
  where: NexusGenArgTypes["Query"]["tagCategories"]["where"];
};

type Output = {
  tagCategories: NexusGenFieldTypes["Query"]["tagCategories"];
};

export const findMany = createEnquiry<Input, Output>(query);

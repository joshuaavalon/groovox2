import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes,
  NexusGenRootTypes
} from "@groovox/graphql-type";

const query = gql`
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

type Input = {
  where: NexusGenArgTypes["Query"]["tagCategory"]["where"];
};

type Output = {
  tagCategory: NexusGenFieldTypes["Query"]["tagCategory"] & {
    tags: NexusGenRootTypes["Tag"][];
  };
};

export const find = createEnquiry<Input, Output>(query);

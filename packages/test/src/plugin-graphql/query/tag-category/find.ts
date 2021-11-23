import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  query tagCategory($where: TagCategoryFindOneInput!) {
    tagCategory(where: $where) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;

type Input = {
  where: NexusGenArgTypes["Query"]["tagCategory"]["where"];
};

type Output = {
  tagCategory: NexusGenFieldTypes["Query"]["tagCategory"];
};

export const find = createEnquiry<Input, Output>(query);

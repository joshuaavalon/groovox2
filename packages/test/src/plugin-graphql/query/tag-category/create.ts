import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
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

type Input = {
  data: NexusGenArgTypes["Mutation"]["createTagCategory"]["data"];
};

type Output = {
  createTagCategory: NexusGenFieldTypes["Mutation"]["createTagCategory"];
};

export const create = createEnquiry<Input, Output>(query);

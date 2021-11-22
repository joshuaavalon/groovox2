import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes,
  NexusGenRootTypes
} from "@groovox/graphql-type";

const query = gql`
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

type Input = {
  data: NexusGenArgTypes["Mutation"]["createTag"]["data"];
};

type Output = {
  createTag: NexusGenFieldTypes["Mutation"]["createTag"] & {
    category: NexusGenRootTypes["TagCategory"];
  };
};

export const create = createEnquiry<Input, Output>(query);

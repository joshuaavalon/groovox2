import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes,
  NexusGenRootTypes
} from "@groovox/graphql-type";

const query = gql`
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

type Input = {
  where: NexusGenArgTypes["Query"]["tag"]["where"];
};

type Output = {
  tag: NexusGenFieldTypes["Query"]["tag"] & {
    category: NexusGenRootTypes["TagCategory"];
  };
};

export const find = createEnquiry<Input, Output>(query);

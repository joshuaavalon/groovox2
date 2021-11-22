import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes,
  NexusGenRootTypes
} from "@groovox/graphql-type";

import type { ArrayElement } from "../util";

const query = gql`
  query tags($where: TagFindManyInput!) {
    tags(where: $where) {
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
  where: NexusGenArgTypes["Query"]["tags"]["where"];
};

type Output = {
  tags: ArrayElement<NexusGenFieldTypes["Query"]["tags"]> &
    {
      category: NexusGenRootTypes["TagCategory"];
    }[];
};

export const findMany = createEnquiry<Input, Output>(query);

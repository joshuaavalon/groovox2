import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  mutation updateTag($data: TagUpdateOneInput!, $where: TagFindOneInput!) {
    updateTag(data: $data, where: $where) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;

type Input = {
  data: NexusGenArgTypes["Mutation"]["updateTag"]["data"];
  where: NexusGenArgTypes["Mutation"]["updateTag"]["where"];
};

type Output = {
  updateTag: NexusGenFieldTypes["Mutation"]["updateTag"];
};

export const update = createEnquiry<Input, Output>(query);

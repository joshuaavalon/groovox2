import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  mutation createStudio($data: StudioCreateOneInput!) {
    createStudio(data: $data) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;

type Input = {
  data: NexusGenArgTypes["Mutation"]["createStudio"]["data"];
};

type Output = {
  createStudio: NexusGenFieldTypes["Mutation"]["createStudio"];
};

export const create = createEnquiry<Input, Output>(query);

import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  mutation updateStudio(
    $data: StudioUpdateOneInput!
    $where: StudioFindOneInput!
  ) {
    updateStudio(data: $data, where: $where) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;

type Input = {
  data: NexusGenArgTypes["Mutation"]["updateStudio"]["data"];
  where: NexusGenArgTypes["Mutation"]["updateStudio"]["where"];
};

type Output = {
  updateStudio: NexusGenFieldTypes["Mutation"]["updateStudio"];
};

export const update = createEnquiry<Input, Output>(query);

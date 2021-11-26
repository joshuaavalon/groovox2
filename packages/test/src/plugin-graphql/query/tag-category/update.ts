import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  mutation updateTagCategory(
    $data: TagCategoryUpdateOneInput!
    $where: TagCategoryFindOneInput!
  ) {
    updateTagCategory(data: $data, where: $where) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;

type Input = {
  data: NexusGenArgTypes["Mutation"]["updateTagCategory"]["data"];
  where: NexusGenArgTypes["Mutation"]["updateTagCategory"]["where"];
};

type Output = {
  updateTagCategory: NexusGenFieldTypes["Mutation"]["updateTagCategory"];
};

export const update = createEnquiry<Input, Output>(query);

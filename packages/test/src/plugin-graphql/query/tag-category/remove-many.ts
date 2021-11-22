import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  mutation removeTagCategories($where: TagCategoryFindManyInput!) {
    removeTagCategories(where: $where) {
      count
    }
  }
`;

type Input = {
  where: NexusGenArgTypes["Mutation"]["removeTagCategories"]["where"];
};

type Output = {
  removeTagCategories: NexusGenFieldTypes["Mutation"]["removeTagCategories"];
};

export const removeMany = createEnquiry<Input, Output>(query);

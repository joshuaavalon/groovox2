import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  mutation removeTags($where: TagFindManyInput!) {
    removeTags(where: $where) {
      count
    }
  }
`;

type Input = {
  where: NexusGenArgTypes["Mutation"]["removeTags"]["where"];
};

type Output = {
  removeTags: NexusGenFieldTypes["Mutation"]["removeTags"];
};

export const removeMany = createEnquiry<Input, Output>(query);

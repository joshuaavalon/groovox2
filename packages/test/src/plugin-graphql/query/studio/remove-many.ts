import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  mutation removeStudios($where: StudioFindManyInput!) {
    removeStudios(where: $where) {
      count
    }
  }
`;

type Input = {
  where: NexusGenArgTypes["Mutation"]["removeStudios"]["where"];
};

type Output = {
  removeStudios: NexusGenFieldTypes["Mutation"]["removeStudios"];
};

export const removeMany = createEnquiry<Input, Output>(query);

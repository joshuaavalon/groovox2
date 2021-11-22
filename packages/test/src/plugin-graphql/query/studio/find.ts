import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  query studio($where: StudioFindOneInput!) {
    studio(where: $where) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;

type Input = {
  where: NexusGenArgTypes["Query"]["studio"]["where"];
};

type Output = {
  studio: NexusGenFieldTypes["Query"]["studio"];
};

export const find = createEnquiry<Input, Output>(query);

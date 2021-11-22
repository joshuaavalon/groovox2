import { createEnquiry, gql } from "../util";

import type {
  NexusGenArgTypes,
  NexusGenFieldTypes
} from "@groovox/graphql-type";

const query = gql`
  query studios($where: StudioFindManyInput!) {
    studios(where: $where) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;

type Input = {
  where: NexusGenArgTypes["Query"]["studios"]["where"];
};

type Output = {
  studios: NexusGenFieldTypes["Query"]["studios"];
};

export const findMany = createEnquiry<Input, Output>(query);

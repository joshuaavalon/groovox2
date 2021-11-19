import _ from "lodash";

import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["Pagination"];

type Output = {
  skip?: number;
  take?: number;
};

export const pagination = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    skip: input.skip ?? undefined,
    take: input.take ?? undefined
  };
  return _.omitBy(result, _.isUndefined);
};

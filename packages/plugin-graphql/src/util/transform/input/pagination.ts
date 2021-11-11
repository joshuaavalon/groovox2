import _ from "lodash";

import type { NexusGenInputs } from "../../../nexus.generated";

type Input = NexusGenInputs["Pagination"];

type Output = {
  skip?: number;
  take?: number;
};

export const pagination = (input?: Input | null): Output => {
  if (_.isNil(input)) {
    return {};
  }
  return {
    skip: input.skip ?? undefined,
    take: input.take ?? undefined
  };
};

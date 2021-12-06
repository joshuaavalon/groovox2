import _ from "lodash";
import { filter } from "../../filter";
import { tag } from "../../tag";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["AttachmentFindManyInput"];

type Output = Prisma.AttachmentWhereInput;

export const findMany = (input?: Input | null): Output | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  const result = {
    id: filter.uuid(input.id),
    tag: tag.input.findMany(input.tag),
    type: filter.string(input.type),
    description: filter.string(input.description),
    createdAt: filter.dataTime(input.createdAt),
    AND: input.and?.map(i => findMany(i)),
    OR: input.or?.map(i => findMany(i)),
    NOT: input.not?.map(i => findMany(i))
  };
  return _.omitBy(result, _.isUndefined);
};

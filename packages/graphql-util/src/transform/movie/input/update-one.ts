import _ from "lodash";

import type { Prisma } from "@prisma/client";
import type { NexusGenInputs } from "@groovox/graphql-type";

type Input = NexusGenInputs["MovieUpdateOneInput"];

type Output = Prisma.MovieUpdateArgs["data"];

export const updateOne = (input: Input): Output => {
  if (_.isNil(input)) {
    return {};
  }
  const studio: Prisma.StudioUpdateManyWithoutMovieInput | undefined =
    input.studioIds
      ? {
          connect: input.studioIds.map(id => ({ id }))
        }
      : undefined;
  const result: Output = {
    name: input.name ?? undefined,
    nameSort: input.nameSort ?? undefined,
    contentRating: input.contentRating ?? undefined,
    airedDate: input.airedDate,
    tagline: input.tagline ?? undefined,
    rating: input.rating,
    description: input.description ?? undefined,
    updatedAt: new Date(),
    studio
  };
  return _.omitBy(result, _.isUndefined);
};

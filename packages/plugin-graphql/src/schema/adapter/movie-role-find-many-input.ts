import { adaptStringFilter } from "./string-filter";
import { adaptUUIDFilter } from "./uuid-filter";
import { mapArray } from "./utils";

import type { Prisma } from "@prisma/client";

type Input = NexusGen["inputTypeShapes"]["MovieRoleFindManyInput"];

type Output = Prisma.MovieRoleWhereInput;

export const adaptMovieRoleFindManyInput: InputAdapter<
  Input,
  Output
> = input => {
  const output: Output = {
    AND: mapArray(input.and, adaptMovieRoleFindManyInput),
    OR: mapArray(input.or, adaptMovieRoleFindManyInput),
    NOT: mapArray(input.not, adaptMovieRoleFindManyInput),
    id: input.id ? adaptUUIDFilter(input.id) : undefined,
    movieId: input.movieId ? adaptUUIDFilter(input.movieId) : undefined,
    personId: input.personId ? adaptUUIDFilter(input.personId) : undefined,
    type: input.type ? adaptStringFilter(input.type) : undefined,
    role: input.role ? adaptStringFilter(input.role) : undefined
  };
  return output;
};

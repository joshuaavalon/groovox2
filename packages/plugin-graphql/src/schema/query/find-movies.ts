import { arg, list, nullable, queryField } from "nexus";

import { guardNil, guardNilArray } from "../utils";

import {
  adaptMovieFindManyInput,
  adaptMovieOrderByInput,
  adaptPagination
} from "../adapter";

export const findMovies = queryField("findMovies", {
  type: list("Movie"),
  args: {
    where: nullable(arg({ type: "MovieFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "MovieOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const { take, skip } = guardNil(adaptPagination)(args.pagination) ?? {};
    const orderBy = guardNilArray(adaptMovieOrderByInput)(args.orderBy);
    const where = guardNil(adaptMovieFindManyInput)(args.where);
    return db.movie.findMany({ where, orderBy, take, skip });
  }
});

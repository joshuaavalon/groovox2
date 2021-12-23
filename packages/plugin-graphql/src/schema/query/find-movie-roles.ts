import { arg, list, nullable, queryField } from "nexus";

import { guardNil, guardNilArray } from "../utils";

import {
  adaptMovieRoleFindManyInput,
  adaptMovieRoleOrderByInput,
  adaptPagination
} from "../adapter";

export const findMovieRoles = queryField("findMovieRoles", {
  type: list("MovieRole"),
  args: {
    where: nullable(arg({ type: "MovieRoleFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "MovieRoleOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const { take, skip } = guardNil(adaptPagination)(args.pagination) ?? {};
    const orderBy = guardNilArray(adaptMovieRoleOrderByInput)(args.orderBy);
    const where = guardNil(adaptMovieRoleFindManyInput)(args.where);
    return db.movieRole.findMany({ where, orderBy, take, skip });
  }
});

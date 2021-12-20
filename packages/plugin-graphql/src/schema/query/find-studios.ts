import { arg, list, nullable, queryField } from "nexus";

import { guardNil, guardNilArray } from "../utils";

import {
  adaptPagination,
  adaptStudioFindManyInput,
  adaptStudioOrderByInput
} from "../adapter";

export const findStudios = queryField("findStudios", {
  type: list("Studio"),
  args: {
    where: nullable(arg({ type: "StudioFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "StudioOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const { take, skip } = guardNil(adaptPagination)(args.pagination) ?? {};
    const orderBy = guardNilArray(adaptStudioOrderByInput)(args.orderBy);
    const where = guardNil(adaptStudioFindManyInput)(args.where);
    return db.studio.findMany({ where, orderBy, take, skip });
  }
});

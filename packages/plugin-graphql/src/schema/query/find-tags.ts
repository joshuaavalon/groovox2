import { arg, list, nullable, queryField } from "nexus";

import { guardNil, guardNilArray } from "../utils";

import {
  adaptPagination,
  adaptTagFindManyInput,
  adaptTagOrderByInput
} from "../adapter";

export const findTags = queryField("findTags", {
  type: list("Tag"),
  args: {
    where: nullable(arg({ type: "TagFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "TagOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const { take, skip } = guardNil(adaptPagination)(args.pagination) ?? {};
    const orderBy = guardNilArray(adaptTagOrderByInput)(args.orderBy);
    const where = guardNil(adaptTagFindManyInput)(args.where);
    return db.tag.findMany({ where, orderBy, take, skip });
  }
});

import { arg, list, nullable, queryField } from "nexus";

import { guardNil, guardNilArray } from "../utils";

import {
  adaptPagination,
  adaptTagCategoryFindManyInput,
  adaptTagCategoryOrderByInput
} from "../adapter";

export const findTagCategories = queryField("findTagCategories", {
  type: list("TagCategory"),
  args: {
    where: nullable(arg({ type: "TagCategoryFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "TagCategoryOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const { take, skip } = guardNil(adaptPagination)(args.pagination) ?? {};
    const orderBy = guardNilArray(adaptTagCategoryOrderByInput)(args.orderBy);
    const where = guardNil(adaptTagCategoryFindManyInput)(args.where);
    return db.tagCategory.findMany({ where, orderBy, take, skip });
  }
});

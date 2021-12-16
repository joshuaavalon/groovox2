import { arg, list, nullable, queryField } from "nexus";

import { adaptArrayDefined, adaptDefined } from "./utils";

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
    const pagination = adaptDefined(args.pagination, adaptPagination);
    const orderBy = adaptArrayDefined(
      args.orderBy,
      adaptTagCategoryOrderByInput
    );
    const where = adaptDefined(args.where, adaptTagCategoryFindManyInput);
    return db.tagCategory.findMany({ where, orderBy, ...pagination });
  }
});

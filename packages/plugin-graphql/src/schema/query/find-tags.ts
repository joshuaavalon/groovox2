import { arg, list, nullable, queryField } from "nexus";

import { adaptArrayDefined, adaptDefined } from "./utils";

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
    const pagination = adaptDefined(args.pagination, adaptPagination);
    const orderBy = adaptArrayDefined(args.orderBy, adaptTagOrderByInput);
    const where = adaptDefined(args.where, adaptTagFindManyInput);
    return db.tag.findMany({ where, orderBy, ...pagination });
  }
});

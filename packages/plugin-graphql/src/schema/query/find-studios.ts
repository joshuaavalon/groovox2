import { arg, list, nullable, queryField } from "nexus";

import { adaptArrayDefined, adaptDefined } from "./utils";

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
    const pagination = adaptDefined(args.pagination, adaptPagination);
    const orderBy = adaptArrayDefined(args.orderBy, adaptStudioOrderByInput);
    const where = adaptDefined(args.where, adaptStudioFindManyInput);
    return db.studio.findMany({ where, orderBy, ...pagination });
  }
});

import { arg, list, nullable, queryField } from "nexus";

import { adaptArrayDefined, adaptDefined } from "./utils";

import {
  adaptPagination,
  adaptUnitFindManyInput,
  adaptUnitOrderByInput
} from "../adapter";

export const findUnits = queryField("findUnits", {
  type: list("Unit"),
  args: {
    where: nullable(arg({ type: "UnitFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "UnitOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const pagination = adaptDefined(args.pagination, adaptPagination);
    const orderBy = adaptArrayDefined(args.orderBy, adaptUnitOrderByInput);
    const where = adaptDefined(args.where, adaptUnitFindManyInput);
    return db.unit.findMany({ where, orderBy, ...pagination });
  }
});

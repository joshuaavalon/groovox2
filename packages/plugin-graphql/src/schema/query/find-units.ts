import { arg, list, nullable, queryField } from "nexus";

import { guardNil, guardNilArray } from "../utils";

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
    const { take, skip } = guardNil(adaptPagination)(args.pagination) ?? {};
    const orderBy = guardNilArray(adaptUnitOrderByInput)(args.orderBy);
    const where = guardNil(adaptUnitFindManyInput)(args.where);
    return db.unit.findMany({ where, orderBy, take, skip });
  }
});

import { arg, list, nullable, queryField } from "nexus";

import { guardNil, guardNilArray } from "../utils";

import {
  adaptPagination,
  adaptPersonFindManyInput,
  adaptPersonOrderByInput
} from "../adapter";

export const findPeople = queryField("findPeople", {
  type: list("Person"),
  args: {
    where: nullable(arg({ type: "PersonFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "PersonOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const { take, skip } = guardNil(adaptPagination)(args.pagination) ?? {};
    const orderBy = guardNilArray(adaptPersonOrderByInput)(args.orderBy);
    const where = guardNil(adaptPersonFindManyInput)(args.where);
    return db.person.findMany({ where, orderBy, take, skip });
  }
});

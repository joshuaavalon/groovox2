import { arg, list, nullable, queryField } from "nexus";

import { adaptArrayDefined, adaptDefined } from "./utils";

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
    const pagination = adaptDefined(args.pagination, adaptPagination);
    const orderBy = adaptArrayDefined(args.orderBy, adaptPersonOrderByInput);
    const where = adaptDefined(args.where, adaptPersonFindManyInput);
    return db.person.findMany({ where, orderBy, ...pagination });
  }
});

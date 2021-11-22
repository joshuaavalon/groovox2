import { arg, list, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = queryField("units", {
  type: list("Unit"),
  args: {
    where: nullable(arg({ type: "UnitFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "UnitOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.unit.input.orderBy(args.orderBy);
    const where = transform.unit.input.findMany(args.where);
    return db.unit.findMany({ where, orderBy, ...pagination });
  }
});

const model: SchemaModel = {
  type
};

export default model;

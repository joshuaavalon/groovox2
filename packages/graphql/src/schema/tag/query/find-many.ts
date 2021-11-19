import { arg, list, nullable, queryField } from "nexus";
import { transform } from "@groovox/graphql-util";
import schema from "./find-many.schema.json";

import type { SchemaModel } from "@groovox/graphql-type";

const type = queryField("tags", {
  type: list("Tag"),
  args: {
    where: nullable(arg({ type: "TagFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "TagOrderByInput" })))
  },
  schema: () =>
    "https://joshuaavalon.github.io/groovox/plugin-graphql/schema/tag/query/find-many",
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.tag.input.orderBy(args.orderBy);
    const where = transform.tag.input.findMany(args.where);
    return db.tag.findMany({ where, orderBy, ...pagination });
  }
});

const model: SchemaModel = {
  type,
  schema
};

export default model;

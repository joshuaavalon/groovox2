import { arg, list, nullable, queryField } from "nexus";
import jsonSchema from "./find-many.schema.json";

export const findMany = queryField("tags", {
  type: list("Tag"),
  args: {
    where: nullable(arg({ type: "TagFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "TagOrderByInput" })))
  },
  schema: () =>
    "https://joshuaavalon.github.io/groovox/plugin-graphql/schema/tag/query/find-many",
  resolve: async (_root, args, ctx) => {
    const { graphqlUtil, db } = ctx.fastify;
    const { transform } = graphqlUtil;
    const pagination = transform.input.pagination(args.pagination);
    const orderBy = transform.tag.input.orderBy(args.orderBy);
    const where = transform.tag.input.findMany(args.where);
    return db.tag.findMany({ where, orderBy, ...pagination });
  }
});

export const findManySchema = jsonSchema;

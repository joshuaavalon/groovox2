import { arg, inputObjectType, list, nullable, queryField } from "nexus";

export const findManyInput = inputObjectType({
  name: "StudioFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("name", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
  }
});

export const OrderByInput = inputObjectType({
  name: "StudioOrderByInput",
  definition(t) {
    t.nullable.field("id", { type: "SortOrder" });
    t.nullable.field("name", { type: "SortOrder" });
    t.nullable.field("createdAt", { type: "SortOrder" });
    t.nullable.field("updatedAt", { type: "SortOrder" });
  }
});

export const findMany = queryField("studios", {
  type: list("Studio"),
  args: {
    where: nullable(arg({ type: "StudioFindManyInput" })),
    pagination: nullable(arg({ type: "Pagination" })),
    orderBy: nullable(list(arg({ type: "StudioOrderByInput" })))
  },
  resolve: async (_root, args, ctx) => {
    const { pagination, orderBy, where } = args;
    const { methods, plugins } = ctx.server;
    const plugin = plugins["@groovox/plugin-graphql"];
    const context = plugin.mapGraphqlContext(ctx);
    return methods.findStudios(
      plugin.transformStudioFindManyInput(where),
      plugin.compactArray(orderBy),
      plugin.normalizePagination(pagination),
      context
    );
  }
});

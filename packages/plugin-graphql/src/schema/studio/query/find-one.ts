import { arg, inputObjectType, nullable, queryField } from "nexus";

export const findOneInput = inputObjectType({
  name: "StudioFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

export const findOne = queryField("studio", {
  type: nullable("Studio"),
  args: {
    where: arg({ type: "StudioFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { where } = args;
    const { db } = ctx.fastify;
    return await db.studio.findUnique({ where });
  }
});

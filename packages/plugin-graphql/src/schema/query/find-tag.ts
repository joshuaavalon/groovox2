import { arg, nullable, queryField } from "nexus";

import { adaptTagFindOneInput } from "../adapter";

export const findTag = queryField("findTag", {
  type: nullable("Tag"),
  args: {
    where: arg({ type: "TagFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptTagFindOneInput(args.where);
    return await db.tag.findUnique({ where });
  }
});

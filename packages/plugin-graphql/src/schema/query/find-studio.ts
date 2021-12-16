import { arg, nullable, queryField } from "nexus";

import { adaptStudioFindOneInput } from "../adapter";

export const findStudio = queryField("findStudio", {
  type: nullable("Studio"),
  args: {
    where: arg({ type: "StudioFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptStudioFindOneInput(args.where);
    return await db.studio.findUnique({ where });
  }
});

import { arg, mutationField } from "nexus";

import { adaptStudioFindManyInput } from "../adapter";

export const removeStudios = mutationField("removeStudios", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "StudioFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptStudioFindManyInput(args.where);
    return db.studio.deleteMany({ where });
  }
});

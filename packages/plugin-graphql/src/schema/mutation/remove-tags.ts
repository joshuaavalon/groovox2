import { arg, mutationField } from "nexus";

import { adaptTagFindManyInput } from "../adapter";

export const removeTags = mutationField("removeTags", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "TagFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptTagFindManyInput(args.where);
    return db.tag.deleteMany({ where });
  }
});

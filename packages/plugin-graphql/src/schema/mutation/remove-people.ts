import { arg, mutationField } from "nexus";

import { adaptStudioFindManyInput } from "../adapter";

export const removePeople = mutationField("removePeople", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "PersonFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptStudioFindManyInput(args.where);
    return db.studio.deleteMany({ where });
  }
});

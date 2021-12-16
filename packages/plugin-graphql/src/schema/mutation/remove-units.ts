import { arg, mutationField } from "nexus";

import { adaptUnitFindManyInput } from "../adapter";

export const removeUnits = mutationField("removeUnits", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "UnitFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptUnitFindManyInput(args.where);
    return db.unit.deleteMany({ where });
  }
});

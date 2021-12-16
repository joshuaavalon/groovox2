import { arg, mutationField } from "nexus";

import { adaptUnitCreateOneInput } from "../adapter";

export const createUnit = mutationField("createUnit", {
  type: "Unit",
  args: {
    data: arg({ type: "UnitCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const data = adaptUnitCreateOneInput(args.data);
    return db.unit.create({ data });
  }
});

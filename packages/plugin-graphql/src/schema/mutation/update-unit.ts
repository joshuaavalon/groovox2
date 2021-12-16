import { arg, mutationField } from "nexus";

import { adaptUnitFindOneInput, adaptUnitUpdateOneInput } from "../adapter";

export const updateUnit = mutationField("updateUnit", {
  type: "Unit",
  args: {
    where: arg({ type: "UnitFindOneInput" }),
    data: arg({ type: "UnitUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptUnitFindOneInput(args.where);
    const data = adaptUnitUpdateOneInput(args.data);
    return db.unit.update({ data, where });
  }
});

import { arg, nullable, queryField } from "nexus";

import { adaptUnitFindOneInput } from "../adapter";

export const findUnit = queryField("findUnit", {
  type: nullable("Unit"),
  args: {
    where: arg({ type: "UnitFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptUnitFindOneInput(args.where);
    return await db.unit.findUnique({ where });
  }
});

import { arg, mutationField } from "nexus";

import { adaptPersonFindManyInput } from "../adapter";

export const removePeople = mutationField("removePeople", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "PersonFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptPersonFindManyInput(args.where);
    return db.person.deleteMany({ where });
  }
});

import { arg, nullable, queryField } from "nexus";

import { adaptPersonFindOneInput } from "../adapter";

export const findPerson = queryField("findPerson", {
  type: nullable("Person"),
  args: {
    where: arg({ type: "PersonFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptPersonFindOneInput(args.where);
    return await db.person.findUnique({ where });
  }
});

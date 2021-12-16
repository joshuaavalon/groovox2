import { arg, mutationField } from "nexus";

import { adaptPersonCreateOneInput } from "../adapter";

export const createPerson = mutationField("createPerson", {
  type: "Person",
  args: {
    data: arg({ type: "PersonCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const data = adaptPersonCreateOneInput(args.data);
    return db.person.create({ data });
  }
});

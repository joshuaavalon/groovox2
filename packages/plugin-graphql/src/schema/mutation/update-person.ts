import { arg, mutationField } from "nexus";

import { adaptPersonFindOneInput, adaptPersonUpdateOneInput } from "../adapter";

export const updatePerson = mutationField("updatePerson", {
  type: "Person",
  args: {
    where: arg({ type: "PersonFindOneInput" }),
    data: arg({ type: "PersonUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptPersonFindOneInput(args.where);
    const data = adaptPersonUpdateOneInput(args.data);
    return db.person.update({ data, where });
  }
});

import { arg, mutationField } from "nexus";

import { adaptTagCreateOneInput } from "../adapter";

export const createTag = mutationField("createTag", {
  type: "Tag",
  args: {
    data: arg({ type: "TagCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const data = adaptTagCreateOneInput(args.data);
    return db.tag.create({ data });
  }
});

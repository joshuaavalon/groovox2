import { arg, mutationField } from "nexus";

import { adaptTagFindOneInput, adaptTagUpdateOneInput } from "../adapter";

export const updateTag = mutationField("updateTag", {
  type: "Tag",
  args: {
    where: arg({ type: "TagFindOneInput" }),
    data: arg({ type: "TagUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptTagFindOneInput(args.where);
    const data = adaptTagUpdateOneInput(args.data);
    return db.tag.update({ data, where });
  }
});

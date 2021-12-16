import { arg, mutationField } from "nexus";

import { adaptTagCategoryCreateOneInput } from "../adapter";

export const createTagCategory = mutationField("createTagCategory", {
  type: "TagCategory",
  args: {
    data: arg({ type: "TagCategoryCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const data = adaptTagCategoryCreateOneInput(args.data);
    return db.tagCategory.create({ data });
  }
});

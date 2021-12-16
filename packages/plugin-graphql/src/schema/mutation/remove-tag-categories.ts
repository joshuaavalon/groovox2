import { arg, mutationField } from "nexus";

import { adaptTagCategoryFindManyInput } from "../adapter";

export const removeTagCategories = mutationField("removeTagCategories", {
  type: "AffectedRowsOutput",
  args: {
    where: arg({ type: "TagCategoryFindManyInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptTagCategoryFindManyInput(args.where);
    return db.tagCategory.deleteMany({ where });
  }
});

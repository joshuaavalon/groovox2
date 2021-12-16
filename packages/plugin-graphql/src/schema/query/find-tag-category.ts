import { arg, nullable, queryField } from "nexus";

import { adaptTagCategoryFindOneInput } from "../adapter";

export const findTagCategory = queryField("findTagCategory", {
  type: nullable("TagCategory"),
  args: {
    where: arg({ type: "TagCategoryFindOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptTagCategoryFindOneInput(args.where);
    return await db.tagCategory.findUnique({ where });
  }
});

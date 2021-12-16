import { arg, mutationField } from "nexus";

import {
  adaptTagCategoryFindOneInput,
  adaptTagCategoryUpdateOneInput
} from "../adapter";

export const updateTagCategory = mutationField("updateTagCategory", {
  type: "TagCategory",
  args: {
    where: arg({ type: "TagCategoryFindOneInput" }),
    data: arg({ type: "TagCategoryUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptTagCategoryFindOneInput(args.where);
    const data = adaptTagCategoryUpdateOneInput(args.data);
    return db.tagCategory.update({ data, where });
  }
});

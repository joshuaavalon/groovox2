import { arg, mutationField } from "nexus";

import { adaptStudioCreateOneInput } from "../adapter";

export const createStudio = mutationField("createStudio", {
  type: "Studio",
  args: {
    data: arg({ type: "StudioCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const data = adaptStudioCreateOneInput(args.data);
    return db.studio.create({ data });
  }
});

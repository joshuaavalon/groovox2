import { arg, mutationField } from "nexus";

import { adaptStudioFindOneInput, adaptStudioUpdateOneInput } from "../adapter";

export const updateStudio = mutationField("updateStudio", {
  type: "Studio",
  args: {
    where: arg({ type: "StudioFindOneInput" }),
    data: arg({ type: "StudioUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptStudioFindOneInput(args.where);
    const data = adaptStudioUpdateOneInput(args.data);
    return db.studio.update({ data, where });
  }
});

import { arg, mutationField } from "nexus";

import {
  adaptMovieRoleFindOneInput,
  adaptMovieRoleUpdateOneInput
} from "../adapter";

export const updateMovieRole = mutationField("updateMovieRole", {
  type: "MovieRole",
  args: {
    where: arg({ type: "MovieRoleFindOneInput" }),
    data: arg({ type: "MovieRoleUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.app;
    const where = adaptMovieRoleFindOneInput(args.where);
    const data = adaptMovieRoleUpdateOneInput(args.data);
    return db.movieRole.update({ data, where });
  }
});

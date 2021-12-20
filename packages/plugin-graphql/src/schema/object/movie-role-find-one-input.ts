import { inputObjectType } from "nexus";

export const movieRoleFindOneInput = inputObjectType({
  name: "MovieRoleFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

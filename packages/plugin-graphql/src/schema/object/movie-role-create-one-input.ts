import { inputObjectType } from "nexus";

export const movieRoleCreateOneInput = inputObjectType({
  name: "MovieRoleCreateOneInput",
  definition(t) {
    t.uuid("movieId");
    t.uuid("personId");
    t.string("type");
    t.string("role");
  }
});

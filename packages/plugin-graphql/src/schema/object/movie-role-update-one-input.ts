import { inputObjectType } from "nexus";

export const movieRoleUpdateOneInput = inputObjectType({
  name: "MovieRoleUpdateOneInput",
  definition(t) {
    t.nullable.uuid("personId");
    t.nullable.string("type");
    t.nullable.string("role");
  }
});

import { inputObjectType } from "nexus";

export const movieRoleOrderByInput = inputObjectType({
  name: "MovieRoleOrderByInput",
  definition(t) {
    t.nullable.field("type", { type: "SortOrder" });
    t.nullable.field("role", { type: "SortOrder" });
    t.nullable.field("sequence", { type: "SortOrder" });
  }
});

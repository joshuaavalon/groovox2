import { inputObjectType } from "nexus";

export const movieRoleFindManyInput = inputObjectType({
  name: "MovieRoleFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("movieId", { type: "UUIDFilter" });
    t.nullable.field("personId", { type: "UUIDFilter" });
    t.nullable.field("type", { type: "StringFilter" });
    t.nullable.field("role", { type: "StringFilter" });
    t.nullable.list.field("and", { type: "MovieRoleFindManyInput" });
    t.nullable.list.field("or", { type: "MovieRoleFindManyInput" });
    t.nullable.list.field("not", { type: "MovieRoleFindManyInput" });
  }
});

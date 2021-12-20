import { inputObjectType } from "nexus";

export const movieFindManyInput = inputObjectType({
  name: "MovieFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("name", { type: "StringFilter" });
    t.nullable.field("nameSort", { type: "StringFilter" });
    t.nullable.field("contentRating", { type: "StringFilter" });
    t.nullable.field("airedDate", { type: "DateNullableFilter" });
    t.nullable.field("tagline", { type: "StringFilter" });
    t.nullable.field("rating", { type: "DecimalNullableFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
    t.nullable.list.field("and", { type: "MovieFindManyInput" });
    t.nullable.list.field("or", { type: "MovieFindManyInput" });
    t.nullable.list.field("not", { type: "MovieFindManyInput" });
  }
});

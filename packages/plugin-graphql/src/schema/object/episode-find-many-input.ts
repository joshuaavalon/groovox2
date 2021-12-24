import { inputObjectType } from "nexus";

export const episodeFindManyInput = inputObjectType({
  name: "EpisodeFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("name", { type: "StringFilter" });
    t.nullable.field("contentRating", { type: "StringFilter" });
    t.nullable.field("airedDate", { type: "DateNullableFilter" });
    t.nullable.field("rating", { type: "DecimalNullableFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
    t.nullable.list.field("and", { type: "EpisodeFindManyInput" });
    t.nullable.list.field("or", { type: "EpisodeFindManyInput" });
    t.nullable.list.field("not", { type: "EpisodeFindManyInput" });
  }
});

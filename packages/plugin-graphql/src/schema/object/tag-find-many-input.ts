import { inputObjectType } from "nexus";

export const tagFindManyInput = inputObjectType({
  name: "TagFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("name", { type: "StringFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("categoryId", { type: "UUIDFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
    t.nullable.list.field("and", { type: "TagFindManyInput" });
    t.nullable.list.field("or", { type: "TagFindManyInput" });
    t.nullable.list.field("not", { type: "TagFindManyInput" });
  }
});

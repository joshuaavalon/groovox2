import { inputObjectType } from "nexus";

export const findManyInput = inputObjectType({
  name: "TagCategoryFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("name", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
    t.nullable.list.nullable.field("and", { type: "TagCategoryFindManyInput" });
    t.nullable.list.nullable.field("or", { type: "TagCategoryFindManyInput" });
    t.nullable.list.nullable.field("not", { type: "TagCategoryFindManyInput" });
  }
});

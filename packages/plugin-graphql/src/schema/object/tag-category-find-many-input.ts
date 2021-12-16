import { inputObjectType } from "nexus";

export const tagCategoryFindManyInput = inputObjectType({
  name: "TagCategoryFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("name", { type: "StringFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
    t.nullable.list.field("and", { type: "TagCategoryFindManyInput" });
    t.nullable.list.field("or", { type: "TagCategoryFindManyInput" });
    t.nullable.list.field("not", { type: "TagCategoryFindManyInput" });
  }
});

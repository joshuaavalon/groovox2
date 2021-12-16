import { inputObjectType } from "nexus";

export const studioFindManyInput = inputObjectType({
  name: "StudioFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("name", { type: "StringFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
    t.nullable.list.field("and", { type: "StudioFindManyInput" });
    t.nullable.list.field("or", { type: "StudioFindManyInput" });
    t.nullable.list.field("not", { type: "StudioFindManyInput" });
  }
});

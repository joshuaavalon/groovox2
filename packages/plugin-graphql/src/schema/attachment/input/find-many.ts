import { inputObjectType } from "nexus";

export const findManyInput = inputObjectType({
  name: "AttachmentFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.list.nullable.field("and", { type: "AttachmentFindManyInput" });
    t.nullable.list.nullable.field("or", { type: "AttachmentFindManyInput" });
    t.nullable.list.nullable.field("not", { type: "AttachmentFindManyInput" });
  }
});

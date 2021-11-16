import { inputObjectType } from "nexus";

export const orderByInput = inputObjectType({
  name: "AttachmentOrderByInput",
  definition(t) {
    t.nullable.field("id", { type: "SortOrder" });
    t.nullable.field("createdAt", { type: "SortOrder" });
  }
});

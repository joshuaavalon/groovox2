import { inputObjectType } from "nexus";

export const personOrderByInput = inputObjectType({
  name: "PersonOrderByInput",
  definition(t) {
    t.nullable.field("id", { type: "SortOrder" });
    t.nullable.field("nameFirst", { type: "SortOrder" });
    t.nullable.field("nameMiddle", { type: "SortOrder" });
    t.nullable.field("nameLast", { type: "SortOrder" });
    t.nullable.field("nameSort", { type: "SortOrder" });
    t.nullable.field("birthDate", { type: "SortOrder" });
    t.nullable.field("deathDate", { type: "SortOrder" });
    t.nullable.field("sex", { type: "SortOrder" });
    t.nullable.field("createdAt", { type: "SortOrder" });
    t.nullable.field("updatedAt", { type: "SortOrder" });
  }
});

import { inputObjectType } from "nexus";

export const personFindManyInput = inputObjectType({
  name: "PersonFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("nameFirst", { type: "StringFilter" });
    t.nullable.field("nameMiddle", { type: "StringFilter" });
    t.nullable.field("nameLast", { type: "StringFilter" });
    t.nullable.field("nameSort", { type: "StringFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("birthDate", { type: "DateNullableFilter" });
    t.nullable.field("deathDate", { type: "DateNullableFilter" });
    t.nullable.field("sex", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
    t.nullable.list.field("and", { type: "PersonFindManyInput" });
    t.nullable.list.field("or", { type: "PersonFindManyInput" });
    t.nullable.list.field("not", { type: "PersonFindManyInput" });
  }
});

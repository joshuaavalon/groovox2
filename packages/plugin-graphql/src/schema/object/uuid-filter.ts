import { inputObjectType } from "nexus";

export const uuidFilter = inputObjectType({
  name: "UUIDFilter",
  definition(t) {
    t.nullable.string("equal");
    t.nullable.list.string("in");
    t.nullable.list.string("notIn");
    t.nullable.field("not", { type: "UUIDFilter" });
  }
});

import { inputObjectType } from "nexus";

const filter = inputObjectType({
  name: "UUIDFilter",
  definition(t) {
    t.nullable.string("equal");
    t.nullable.list.nonNull.string("in");
    t.nullable.list.nonNull.string("notIn");
    t.nullable.field("not", { type: "UUIDFilter" });
  }
});

export default filter;

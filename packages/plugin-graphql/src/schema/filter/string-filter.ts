import { inputObjectType } from "nexus";

const filter = inputObjectType({
  name: "StringFilter",
  definition(t) {
    t.nullable.string("contain");
    t.nullable.string("endWith");
    t.nullable.string("equal");
    t.nullable.string("startWith");
    t.nullable.list.nonNull.string("in");
    t.nullable.list.nonNull.string("notIn");
    t.nullable.field("not", { type: "StringFilter" });
  }
});

export default filter;

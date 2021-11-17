import { inputObjectType } from "nexus";

const filter = inputObjectType({
  name: "DateNullableFilter",
  definition(t) {
    t.nullable.date("equal");
    t.nullable.date("gt");
    t.nullable.date("gte");
    t.nullable.date("lt");
    t.nullable.date("lte");
    t.nullable.list.nonNull.date("in");
    t.nullable.list.nonNull.date("notIn");
    t.nullable.field("not", { type: "DateNullableFilter" });
  }
});

export default filter;

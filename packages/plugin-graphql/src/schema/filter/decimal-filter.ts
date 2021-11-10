import { inputObjectType } from "nexus";

const filter = inputObjectType({
  name: "DecimalFilter",
  definition(t) {
    t.nullable.decimal("equal");
    t.nullable.decimal("gt");
    t.nullable.decimal("gte");
    t.nullable.decimal("lt");
    t.nullable.decimal("lte");
    t.nullable.list.nonNull.decimal("in");
    t.nullable.list.nonNull.decimal("notIn");
    t.nullable.field("not", { type: "DecimalFilter" });
  }
});

export default filter;

import { inputObjectType } from "nexus";

export const decimalNullableFilter = inputObjectType({
  name: "DecimalNullableFilter",
  definition(t) {
    t.nullable.decimal("equal");
    t.nullable.decimal("gt");
    t.nullable.decimal("gte");
    t.nullable.decimal("lt");
    t.nullable.decimal("lte");
    t.nullable.list.decimal("in");
    t.nullable.list.decimal("notIn");
    t.nullable.field("not", { type: "DecimalNullableFilter" });
  }
});

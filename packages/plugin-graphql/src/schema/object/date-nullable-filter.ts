import { inputObjectType } from "nexus";

export const dateNullableFilter = inputObjectType({
  name: "DateNullableFilter",
  definition(t) {
    t.nullable.date("equal");
    t.nullable.date("gt");
    t.nullable.date("gte");
    t.nullable.date("lt");
    t.nullable.date("lte");
    t.nullable.list.date("in");
    t.nullable.list.date("notIn");
    t.nullable.field("not", { type: "DateNullableFilter" });
  }
});

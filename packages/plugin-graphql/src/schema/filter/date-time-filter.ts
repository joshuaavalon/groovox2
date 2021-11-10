import { inputObjectType } from "nexus";

const filter = inputObjectType({
  name: "DateTimeFilter",
  definition(t) {
    t.nullable.dateTime("equal");
    t.nullable.dateTime("gt");
    t.nullable.dateTime("gte");
    t.nullable.dateTime("lt");
    t.nullable.dateTime("lte");
    t.nullable.list.nonNull.dateTime("in");
    t.nullable.list.nonNull.dateTime("notIn");
    t.nullable.field("not", { type: "DateTimeFilter" });
  }
});

export default filter;

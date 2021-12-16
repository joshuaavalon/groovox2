import { inputObjectType } from "nexus";

export const dateTimeFilter = inputObjectType({
  name: "DateTimeFilter",
  definition(t) {
    t.nullable.dateTime("equal");
    t.nullable.dateTime("gt");
    t.nullable.dateTime("gte");
    t.nullable.dateTime("lt");
    t.nullable.dateTime("lte");
    t.nullable.list.dateTime("in");
    t.nullable.list.dateTime("notIn");
    t.nullable.field("not", { type: "DateTimeFilter" });
  }
});

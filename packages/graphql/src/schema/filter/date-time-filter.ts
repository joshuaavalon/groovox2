import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
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

const model: SchemaModel = {
  type
};

export default model;

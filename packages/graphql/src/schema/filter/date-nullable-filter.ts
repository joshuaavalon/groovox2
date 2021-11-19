import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
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

const model: SchemaModel = {
  type
};

export default model;

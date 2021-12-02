import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "DecimalFilter",
  definition(t) {
    t.nullable.decimal("equal");
    t.nullable.decimal("gt");
    t.nullable.decimal("gte");
    t.nullable.decimal("lt");
    t.nullable.decimal("lte");
    t.nullable.list.decimal("in");
    t.nullable.list.decimal("notIn");
    t.nullable.field("not", { type: "DecimalFilter" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

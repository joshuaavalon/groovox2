import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "StringFilter",
  definition(t) {
    t.nullable.string("contain");
    t.nullable.string("endWith");
    t.nullable.string("equal");
    t.nullable.string("startWith");
    t.nullable.list.string("in");
    t.nullable.list.string("notIn");
    t.nullable.field("not", { type: "StringFilter" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

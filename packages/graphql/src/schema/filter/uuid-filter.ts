import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "UUIDFilter",
  definition(t) {
    t.nullable.string("equal");
    t.nullable.list.nonNull.string("in");
    t.nullable.list.nonNull.string("notIn");
    t.nullable.field("not", { type: "UUIDFilter" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

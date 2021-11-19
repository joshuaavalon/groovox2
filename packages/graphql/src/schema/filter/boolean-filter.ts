import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "BooleanFilter",
  definition(t) {
    t.nullable.boolean("equal");
    t.nullable.field("not", { type: "BooleanFilter" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

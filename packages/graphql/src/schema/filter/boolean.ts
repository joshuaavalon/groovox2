import { inputObjectType } from "nexus";
import schema from "./boolean.schema.json";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "BooleanFilter",
  definition(t) {
    t.nullable.boolean("equal");
    t.nullable.field("not", { type: "BooleanFilter" });
  }
});

const model: SchemaModel = {
  type,
  schema
};

export default model;

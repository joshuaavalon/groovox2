import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "TagCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
    t.uuid("categoryId");
  }
});

const model: SchemaModel = {
  type
};

export default model;

import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "RoleCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

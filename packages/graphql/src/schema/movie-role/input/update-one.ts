import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "MovieRoleUpdateOneInput",
  definition(t) {
    t.nullable.string("type");
    t.nullable.string("role");
  }
});

const model: SchemaModel = {
  type
};

export default model;

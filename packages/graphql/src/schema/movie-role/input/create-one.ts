import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "MovieRoleCreateOneInput",
  definition(t) {
    t.uuid("movieId");
    t.uuid("personId");
    t.string("type");
    t.string("role");
  }
});

const model: SchemaModel = {
  type
};

export default model;

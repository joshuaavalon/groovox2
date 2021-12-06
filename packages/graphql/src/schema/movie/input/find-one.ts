import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "MovieFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

const model: SchemaModel = {
  type
};

export default model;
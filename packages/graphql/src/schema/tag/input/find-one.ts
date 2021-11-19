import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "TagFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

const model: SchemaModel = {
  type
};

export default model;

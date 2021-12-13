import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "UnitUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("description");
    t.nullable.list.uuid("memberIds");
    t.nullable.list.uuid("tagIds");
  }
});

const model: SchemaModel = {
  type
};

export default model;

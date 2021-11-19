import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "TagCategory",
  sourceType: {
    module: "@prisma/client",
    export: "TagCategory"
  },
  definition(t) {
    t.id("_id", { resolve: root => `tagCategory:${root.id}` });
    t.uuid("id");
    t.string("name");
    t.string("description");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
  }
});

const model: SchemaModel = {
  type
};

export default model;

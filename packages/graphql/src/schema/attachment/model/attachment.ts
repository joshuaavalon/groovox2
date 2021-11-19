import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Attachment",
  sourceType: {
    module: "@prisma/client",
    export: "Attachment"
  },
  definition(t) {
    t.id("_id", { resolve: root => `attachment:${root.id}` });
    t.uuid("id");
    t.string("description");
    t.dateTime("createdAt");
  }
});

const model: SchemaModel = {
  type
};

export default model;

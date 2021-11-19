import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Person",
  sourceType: {
    module: "@prisma/client",
    export: "Person"
  },
  definition(t) {
    t.id("_id", { resolve: root => `person:${root.id}` });
    t.uuid("id");
    t.string("nameFirst");
    t.string("nameMiddle");
    t.string("nameLast");
    t.string("nameSort");
    t.string("description");
    t.nullable.date("birthDate");
    t.nullable.date("deathDate");
    t.string("sex");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
  }
});

const model: SchemaModel = {
  type
};

export default model;

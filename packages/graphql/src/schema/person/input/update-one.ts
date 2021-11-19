import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "PersonUpdateOneInput",
  definition(t) {
    t.nullable.string("nameFirst");
    t.nullable.string("nameMiddle");
    t.nullable.string("nameLast");
    t.nullable.string("nameSort");
    t.nullable.string("description");
    t.nullable.date("birthDate");
    t.nullable.date("deathDate");
    t.nullable.string("sex");
  }
});

const model: SchemaModel = {
  type
};

export default model;

import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "PersonCreateOneInput",
  definition(t) {
    t.string("nameFirst");
    t.string("nameMiddle");
    t.string("nameLast");
    t.string("nameSort");
    t.string("description", { default: "" });
    t.nullable.date("birthDate");
    t.nullable.date("deathDate");
    t.string("sex");
  }
});

const model: SchemaModel = {
  type
};

export default model;

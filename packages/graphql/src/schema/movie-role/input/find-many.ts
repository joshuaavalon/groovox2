import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "MovieRoleFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("type", { type: "StringFilter" });
    t.nullable.field("role", { type: "StringFilter" });
    t.nullable.list.nullable.field("and", { type: "MovieRoleFindManyInput" });
    t.nullable.list.nullable.field("or", { type: "MovieRoleFindManyInput" });
    t.nullable.list.nullable.field("not", { type: "MovieRoleFindManyInput" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

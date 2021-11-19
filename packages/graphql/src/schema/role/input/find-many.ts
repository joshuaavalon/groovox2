import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "RoleFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("name", { type: "StringFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.field("updatedAt", { type: "DateTimeFilter" });
    t.nullable.list.nullable.field("and", { type: "RoleFindManyInput" });
    t.nullable.list.nullable.field("or", { type: "RoleFindManyInput" });
    t.nullable.list.nullable.field("not", { type: "RoleFindManyInput" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

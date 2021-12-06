import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "MovieOrderByInput",
  definition(t) {
    t.nullable.field("id", { type: "SortOrder" });
    t.nullable.field("name", { type: "SortOrder" });
    t.nullable.field("nameSort", { type: "SortOrder" });
    t.nullable.field("contentRating", { type: "SortOrder" });
    t.nullable.field("airedDate", { type: "SortOrder" });
    t.nullable.field("rating", { type: "SortOrder" });
    t.nullable.field("createdAt", { type: "SortOrder" });
    t.nullable.field("updatedAt", { type: "SortOrder" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

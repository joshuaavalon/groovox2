import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "AttachmentOrderByInput",
  definition(t) {
    t.nullable.field("id", { type: "SortOrder" });
    t.nullable.field("type", { type: "SortOrder" });
    t.nullable.field("createdAt", { type: "SortOrder" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

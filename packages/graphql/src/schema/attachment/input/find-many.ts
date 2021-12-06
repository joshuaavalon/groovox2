import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "AttachmentFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("tag", { type: "TagFindManyInput" });
    t.nullable.field("type", { type: "StringFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.list.nullable.field("and", {
      type: "AttachmentFindManyInput"
    });
    t.nullable.list.nullable.field("or", {
      type: "AttachmentFindManyInput"
    });
    t.nullable.list.nullable.field("not", {
      type: "AttachmentFindManyInput"
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;

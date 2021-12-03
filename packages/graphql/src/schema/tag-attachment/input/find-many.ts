import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "TagAttachmentFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("tag", { type: "TagFindManyInput" });
    t.nullable.field("type", { type: "StringFilter" });
    t.nullable.field("description", { type: "StringFilter" });
    t.nullable.field("createdAt", { type: "DateTimeFilter" });
    t.nullable.list.nullable.field("and", {
      type: "TagAttachmentFindManyInput"
    });
    t.nullable.list.nullable.field("or", {
      type: "TagAttachmentFindManyInput"
    });
    t.nullable.list.nullable.field("not", {
      type: "TagAttachmentFindManyInput"
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;

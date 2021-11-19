import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "AttachmentCreateOneInput",
  definition(t) {
    t.uuid("fileId");
    t.nullable.uuid("tagId");
    t.string("description", { default: "" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

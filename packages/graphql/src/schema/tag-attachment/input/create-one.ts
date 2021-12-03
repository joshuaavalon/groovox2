import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "TagAttachmentCreateOneInput",
  definition(t) {
    t.uuid("tagId");
    t.string("type");
    t.string("description", { default: "" });
  }
});

const model: SchemaModel = {
  type
};

export default model;

import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "AttachmentCreateOneInput",
  definition(t) {
    t.string("type");
    t.string("description", { default: "" });
    t.file("file");
  }
});

const model: SchemaModel = {
  type
};

export default model;

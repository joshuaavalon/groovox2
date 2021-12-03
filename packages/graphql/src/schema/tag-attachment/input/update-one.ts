import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "TagAttachmentUpdateOneInput",
  definition(t) {
    t.nullable.string("type");
    t.nullable.string("description");
  }
});

const model: SchemaModel = {
  type
};

export default model;

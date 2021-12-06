import { inputObjectType } from "nexus";
import schema from "./create-one.schema.json";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "StudioCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
  }
});

const model: SchemaModel = {
  type,
  schema
};

export default model;

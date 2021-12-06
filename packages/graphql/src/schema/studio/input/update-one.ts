import { inputObjectType } from "nexus";
import schema from "./update-one.schema.json";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "StudioUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("description");
  }
});

const model: SchemaModel = {
  type,
  schema
};

export default model;

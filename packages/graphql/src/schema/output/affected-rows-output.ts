import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "AffectedRowsOutput",
  definition(t) {
    t.int("count");
  }
});

const model: SchemaModel = {
  type
};

export default model;

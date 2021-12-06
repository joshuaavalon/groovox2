import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "Pagination",
  description: "Control the range of the records to return.",
  definition(t) {
    t.nullable.int("take", {
      description:
        "Maximum number of records to return. Must be greater than 0."
    });
    t.nullable.int("skip", {
      description: "Number of records to skip. Must be greater or equal than 0."
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;

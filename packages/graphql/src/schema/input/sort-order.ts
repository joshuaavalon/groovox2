import { enumType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = enumType({
  name: "SortOrder",
  members: ["asc", "desc"]
});

const model: SchemaModel = {
  type
};

export default model;

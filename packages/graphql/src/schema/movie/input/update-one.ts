import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "MovieUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("nameSort");
    t.nullable.string("contentRating");
    t.nullable.date("airedDate");
    t.nullable.string("tagline");
    t.nullable.decimal("rating");
    t.nullable.string("description");
    t.nullable.list.uuid("studioIds");
  }
});

const model: SchemaModel = {
  type
};

export default model;

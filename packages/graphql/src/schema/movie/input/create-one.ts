import { inputObjectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = inputObjectType({
  name: "MovieCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("nameSort");
    t.string("contentRating");
    t.nullable.date("airedDate");
    t.string("tagline", { default: "" });
    t.nullable.decimal("rating");
    t.string("description", { default: "" });
    t.list.uuid("studioIds", { default: [] });
  }
});

const model: SchemaModel = {
  type
};

export default model;

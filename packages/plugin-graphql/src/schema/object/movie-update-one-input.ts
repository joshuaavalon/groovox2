import { inputObjectType } from "nexus";

export const movieUpdateOneInput = inputObjectType({
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

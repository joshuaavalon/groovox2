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
    t.nullable.list.string("alias");
    t.nullable.list.field("roles", {
      type: "MovieCreateRoleInput",
      default: []
    });
  }
});

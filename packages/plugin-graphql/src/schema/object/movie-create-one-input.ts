import { inputObjectType } from "nexus";

export const movieCreateOneInput = inputObjectType({
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
    t.list.field("roles", { type: "MovieRoleCreateOneInput", default: [] });
  }
});

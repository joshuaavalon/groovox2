import { inputObjectType } from "nexus";

export const episodeCreateOneInput = inputObjectType({
  name: "EpisodeCreateOneInput",
  definition(t) {
    t.uuid("seasonId");
    t.int("episodeNo");
    t.string("name");
    t.string("contentRating");
    t.nullable.date("airedDate");
    t.nullable.decimal("rating");
    t.string("description", { default: "" });
    t.list.field("roles", { type: "EpisodeCreateRoleInput", default: [] });
  }
});

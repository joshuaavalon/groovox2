import { inputObjectType } from "nexus";

export const episodeUpdateOneInput = inputObjectType({
  name: "EpisodeUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("contentRating");
    t.nullable.date("airedDate");
    t.nullable.decimal("rating");
    t.nullable.string("description");
    t.nullable.list.field("roles", {
      type: "EpisodeCreateRoleInput",
      default: []
    });
  }
});

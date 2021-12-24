import { inputObjectType } from "nexus";

export const episodeRoleUpdateOneInput = inputObjectType({
  name: "EpisodeRoleUpdateOneInput",
  definition(t) {
    t.nullable.uuid("personId");
    t.nullable.string("type");
    t.nullable.string("role");
  }
});

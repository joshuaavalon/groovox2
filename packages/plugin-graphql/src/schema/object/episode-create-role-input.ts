import { inputObjectType } from "nexus";

export const episodeCreateRoleInput = inputObjectType({
  name: "EpisodeCreateRoleInput",
  definition(t) {
    t.uuid("personId");
    t.string("type");
    t.string("role");
  }
});

import { inputObjectType } from "nexus";

export const episodeRoleCreateOneInput = inputObjectType({
  name: "EpisodeRoleCreateOneInput",
  definition(t) {
    t.uuid("episodeId");
    t.uuid("personId");
    t.string("type");
    t.string("role");
  }
});

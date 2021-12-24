import { inputObjectType } from "nexus";

export const episodeRoleFindOneInput = inputObjectType({
  name: "EpisodeRoleFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

import { inputObjectType } from "nexus";

export const episodeRoleOrderByInput = inputObjectType({
  name: "EpisodeRoleOrderByInput",
  definition(t) {
    t.nullable.field("type", { type: "SortOrder" });
    t.nullable.field("role", { type: "SortOrder" });
    t.nullable.field("sequence", { type: "SortOrder" });
  }
});

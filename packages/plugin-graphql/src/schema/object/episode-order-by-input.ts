import { inputObjectType } from "nexus";

export const episodeOrderByInput = inputObjectType({
  name: "EpisodeOrderByInput",
  definition(t) {
    t.nullable.field("id", { type: "SortOrder" });
    t.nullable.field("name", { type: "SortOrder" });
    t.nullable.field("contentRating", { type: "SortOrder" });
    t.nullable.field("airedDate", { type: "SortOrder" });
    t.nullable.field("rating", { type: "SortOrder" });
    t.nullable.field("createdAt", { type: "SortOrder" });
    t.nullable.field("updatedAt", { type: "SortOrder" });
  }
});

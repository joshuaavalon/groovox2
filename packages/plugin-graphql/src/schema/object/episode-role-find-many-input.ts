import { inputObjectType } from "nexus";

export const episodeRoleFindManyInput = inputObjectType({
  name: "EpisodeRoleFindManyInput",
  definition(t) {
    t.nullable.field("id", { type: "UUIDFilter" });
    t.nullable.field("episodeId", { type: "UUIDFilter" });
    t.nullable.field("personId", { type: "UUIDFilter" });
    t.nullable.field("type", { type: "StringFilter" });
    t.nullable.field("role", { type: "StringFilter" });
    t.nullable.list.field("and", { type: "EpisodeRoleFindManyInput" });
    t.nullable.list.field("or", { type: "EpisodeRoleFindManyInput" });
    t.nullable.list.field("not", { type: "EpisodeRoleFindManyInput" });
  }
});

import { objectType } from "nexus";

export const episodeRole = objectType({
  name: "EpisodeRole",
  sourceType: {
    module: "@prisma/client",
    export: "EpisodeRole"
  },
  definition(t) {
    t.id("_id", { resolve: root => `episode-role:${root.id}` });
    t.uuid("id");
    t.string("type");
    t.string("role");
    t.field("episode", {
      type: "Episode",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.app;
        return db.episode.findUnique({
          where: { id: root.episodeId },
          rejectOnNotFound: true
        });
      }
    });
    t.field("person", {
      type: "Person",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.app;
        return db.person.findUnique({
          where: { id: root.personId },
          rejectOnNotFound: true
        });
      }
    });
  }
});

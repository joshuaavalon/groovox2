import { objectType } from "nexus";

export const movieRole = objectType({
  name: "MovieRole",
  sourceType: {
    module: "@prisma/client",
    export: "MovieRole"
  },
  definition(t) {
    t.id("_id", { resolve: root => `movie-role:${root.id}` });
    t.uuid("id");
    t.string("type");
    t.string("role");
    t.field("movie", {
      type: "Movie",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.app;
        return db.movie.findUnique({
          where: { id: root.movieId },
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

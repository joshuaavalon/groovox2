import { objectType } from "nexus";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
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
        const { db } = ctx.fastify;
        return db.movie.findUnique({
          where: { id: root.movieId },
          rejectOnNotFound: true
        });
      }
    });
    t.field("person", {
      type: "Person",
      resolve: async (root, _args, ctx) => {
        const { db } = ctx.fastify;
        return db.person.findUnique({
          where: { id: root.personId },
          rejectOnNotFound: true
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;

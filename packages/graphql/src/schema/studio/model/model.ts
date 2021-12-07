import { arg, list, nullable, objectType } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = objectType({
  name: "Studio",
  sourceType: {
    module: "@prisma/client",
    export: "Studio"
  },
  definition(t) {
    t.id("_id", { resolve: root => `studio:${root.id}` });
    t.uuid("id");
    t.string("name");
    t.string("description");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.list.field("movies", {
      type: "Movie",
      args: {
        orderBy: nullable(list(arg({ type: "MovieOrderByInput" })))
      },
      resolve: async (root, args, ctx) => {
        const { db } = ctx.fastify;
        const orderBy = transform.movie.input.orderBy(args.orderBy);
        return db.movie.findMany({
          where: { studio: { some: { id: { equals: root.id } } } },
          orderBy
        });
      }
    });
    t.list.field("shows", {
      type: "Show",
      args: {
        orderBy: nullable(list(arg({ type: "ShowOrderByInput" })))
      },
      resolve: async (root, args, ctx) => {
        const { db } = ctx.fastify;
        const orderBy = transform.show.input.orderBy(args.orderBy);
        return db.show.findMany({
          where: { studio: { some: { id: { equals: root.id } } } },
          orderBy
        });
      }
    });
  }
});

const model: SchemaModel = {
  type
};

export default model;

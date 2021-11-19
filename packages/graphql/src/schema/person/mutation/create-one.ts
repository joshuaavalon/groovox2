import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("createPerson", {
  type: "Person",
  args: {
    data: arg({ type: "PersonCreateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const data = transform.person.input.createOne(args.data);
    return db.person.create({ data });
  }
});

const model: SchemaModel = {
  type
};

export default model;

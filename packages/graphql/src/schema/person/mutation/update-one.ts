import { arg, mutationField } from "nexus";
import { transform } from "@groovox/graphql-util";

import type { SchemaModel } from "@groovox/graphql-type";

const type = mutationField("updatePerson", {
  type: "Person",
  args: {
    where: arg({ type: "PersonFindOneInput" }),
    data: arg({ type: "PersonUpdateOneInput" })
  },
  resolve: async (_root, args, ctx) => {
    const { db } = ctx.fastify;
    const where = transform.person.input.findOne(args.where);
    const data = transform.person.input.updateOne(args.data);
    return db.person.update({ data, where });
  }
});

const model: SchemaModel = {
  type
};

export default model;

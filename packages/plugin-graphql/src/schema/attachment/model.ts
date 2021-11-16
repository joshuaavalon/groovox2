import { objectType } from "nexus";

const attachment = objectType({
  name: "Attachment",
  sourceType: {
    module: "@prisma/client",
    export: "Attachment"
  },
  definition(t) {
    t.id("_id", { resolve: root => root.id });
    t.uuid("id");
    t.string("description");
    t.dateTime("createdAt");
  }
});

export const models = [attachment];

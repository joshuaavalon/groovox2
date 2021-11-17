import { objectType } from "nexus";

const studio = objectType({
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
  }
});

export const models = [studio];

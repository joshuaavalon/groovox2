import { objectType } from "nexus";

const role = objectType({
  name: "Role",
  sourceType: {
    module: "@prisma/client",
    export: "Role"
  },
  definition(t) {
    t.id("_id", { resolve: root => `role:${root.id}` });
    t.uuid("id");
    t.string("name");
    t.string("description");
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
  }
});

export const models = [role];

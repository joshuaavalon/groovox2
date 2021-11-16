import { inputObjectType } from "nexus";

export const updateOneInput = inputObjectType({
  name: "TagUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("description");
    t.nullable.uuid("categoryId");
  }
});

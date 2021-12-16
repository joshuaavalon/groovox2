import { inputObjectType } from "nexus";

export const tagUpdateOneInput = inputObjectType({
  name: "TagUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("description");
    t.nullable.uuid("categoryId");
  }
});

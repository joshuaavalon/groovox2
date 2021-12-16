import { inputObjectType } from "nexus";

export const tagCategoryUpdateOneInput = inputObjectType({
  name: "TagCategoryUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("description");
  }
});

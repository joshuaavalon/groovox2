import { inputObjectType } from "nexus";

export const tagCategoryCreateOneInput = inputObjectType({
  name: "TagCategoryCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
  }
});

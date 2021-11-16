import { inputObjectType } from "nexus";

export const createOneInput = inputObjectType({
  name: "TagCategoryCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
  }
});

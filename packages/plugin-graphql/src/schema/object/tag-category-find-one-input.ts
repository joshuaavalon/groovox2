import { inputObjectType } from "nexus";

export const tagCategoryFindOneInput = inputObjectType({
  name: "TagCategoryFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

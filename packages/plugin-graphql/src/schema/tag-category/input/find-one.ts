import { inputObjectType } from "nexus";

export const findOneInput = inputObjectType({
  name: "TagCategoryFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

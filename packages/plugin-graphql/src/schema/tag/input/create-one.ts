import { inputObjectType } from "nexus";

export const createOneInput = inputObjectType({
  name: "TagCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
    t.uuid("categoryId");
  }
});

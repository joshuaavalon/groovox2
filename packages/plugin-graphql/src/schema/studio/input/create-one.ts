import { inputObjectType } from "nexus";

export const createOneInput = inputObjectType({
  name: "StudioCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
  }
});

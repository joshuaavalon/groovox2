import { inputObjectType } from "nexus";

export const studioCreateOneInput = inputObjectType({
  name: "StudioCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
  }
});

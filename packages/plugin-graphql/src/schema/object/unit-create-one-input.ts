import { inputObjectType } from "nexus";

export const unitCreateOneInput = inputObjectType({
  name: "UnitCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
  }
});

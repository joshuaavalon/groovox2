import { inputObjectType } from "nexus";

export const booleanFilter = inputObjectType({
  name: "BooleanFilter",
  definition(t) {
    t.boolean("equal");
  }
});

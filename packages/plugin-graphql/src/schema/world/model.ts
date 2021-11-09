import { objectType } from "nexus";

const Style = objectType({
  name: "Style",
  definition(t) {
    t.uuid("a");
  }
});

export const models = [Style];

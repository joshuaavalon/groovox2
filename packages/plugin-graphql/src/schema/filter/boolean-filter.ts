import { inputObjectType } from "nexus";

const filter = inputObjectType({
  name: "BooleanFilter",
  definition(t) {
    t.nullable.boolean("equal");
    t.nullable.field("not", { type: "BooleanFilter" });
  }
});

export default filter;

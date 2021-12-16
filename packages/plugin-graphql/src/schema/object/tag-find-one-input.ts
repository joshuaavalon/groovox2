import { inputObjectType } from "nexus";

export const tagFindOneInput = inputObjectType({
  name: "TagFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

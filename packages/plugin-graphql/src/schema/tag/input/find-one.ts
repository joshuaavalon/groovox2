import { inputObjectType } from "nexus";

export const findOneInput = inputObjectType({
  name: "TagFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

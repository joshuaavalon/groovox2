import { inputObjectType } from "nexus";

export const findOneInput = inputObjectType({
  name: "StudioFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

import { inputObjectType } from "nexus";

export const studioFindOneInput = inputObjectType({
  name: "StudioFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

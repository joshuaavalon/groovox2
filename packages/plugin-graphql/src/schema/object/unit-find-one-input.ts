import { inputObjectType } from "nexus";

export const unitFindOneInput = inputObjectType({
  name: "UnitFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

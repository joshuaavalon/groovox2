import { inputObjectType } from "nexus";

export const findOneInput = inputObjectType({
  name: "RoleFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

import { inputObjectType } from "nexus";

export const findOneInput = inputObjectType({
  name: "PersonFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

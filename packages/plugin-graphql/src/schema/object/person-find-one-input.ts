import { inputObjectType } from "nexus";

export const personFindOneInput = inputObjectType({
  name: "PersonFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

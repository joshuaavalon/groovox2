import { inputObjectType } from "nexus";

export const movieCreateRoleInput = inputObjectType({
  name: "MovieCreateRoleInput",
  definition(t) {
    t.uuid("personId");
    t.string("type");
    t.string("role");
  }
});

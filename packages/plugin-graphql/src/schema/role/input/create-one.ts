import { inputObjectType } from "nexus";

export const createOneInput = inputObjectType({
  name: "RoleCreateOneInput",
  definition(t) {
    t.string("name");
    t.string("description", { default: "" });
  }
});

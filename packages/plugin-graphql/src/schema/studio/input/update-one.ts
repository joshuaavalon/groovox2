import { inputObjectType } from "nexus";

export const updateOneInput = inputObjectType({
  name: "StudioUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("description");
  }
});

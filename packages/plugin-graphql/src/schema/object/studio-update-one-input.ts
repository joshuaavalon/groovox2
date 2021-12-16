import { inputObjectType } from "nexus";

export const studioUpdateOneInput = inputObjectType({
  name: "StudioUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("description");
  }
});

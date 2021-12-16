import { inputObjectType } from "nexus";

export const unitUpdateOneInput = inputObjectType({
  name: "UnitUpdateOneInput",
  definition(t) {
    t.nullable.string("name");
    t.nullable.string("description");
    t.nullable.list.uuid("memberIds");
    t.nullable.list.uuid("tagIds");
  }
});

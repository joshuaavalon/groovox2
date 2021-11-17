import { inputObjectType } from "nexus";

export const createOneInput = inputObjectType({
  name: "PersonCreateOneInput",
  definition(t) {
    t.string("nameFirst");
    t.string("nameMiddle");
    t.string("nameLast");
    t.string("nameSort");
    t.string("description", { default: "" });
    t.nullable.date("birthDate");
    t.nullable.date("deathDate");
    t.string("sex");
  }
});

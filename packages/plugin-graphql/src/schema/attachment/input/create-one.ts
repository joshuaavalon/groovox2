import { inputObjectType } from "nexus";

export const createOneInput = inputObjectType({
  name: "AttachmentCreateOneInput",
  definition(t) {
    t.uuid("id");
    t.nullable.uuid("tagId");
    t.string("description", { default: "" });
  }
});

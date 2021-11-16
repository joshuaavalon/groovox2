import { inputObjectType } from "nexus";

export const findOneInput = inputObjectType({
  name: "AttachmentFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

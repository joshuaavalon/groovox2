import { inputObjectType } from "nexus";

export const episodeFindOneInput = inputObjectType({
  name: "EpisodeFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

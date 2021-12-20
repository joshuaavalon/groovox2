import { inputObjectType } from "nexus";

export const movieFindOneInput = inputObjectType({
  name: "MovieFindOneInput",
  definition(t) {
    t.uuid("id");
  }
});

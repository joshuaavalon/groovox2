import { objectType } from "nexus";

export const affectedRowsOutput = objectType({
  name: "AffectedRowsOutput",
  definition(t) {
    t.int("count");
  }
});

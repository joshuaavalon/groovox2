import { objectType } from "nexus";

const output = objectType({
  name: "AffectedRowsOutput",
  definition(t) {
    t.int("count");
  }
});

export default output;

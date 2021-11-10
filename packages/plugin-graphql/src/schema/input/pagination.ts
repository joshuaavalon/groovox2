import { inputObjectType } from "nexus";

const input = inputObjectType({
  name: "Pagination",
  definition(t) {
    t.nullable.int("take");
    t.nullable.int("skip");
  }
});

export default input;

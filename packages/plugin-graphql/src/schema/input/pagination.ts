import { inputObjectType } from "nexus";
import jsonSchema from "./pagination.schema.json";

export const paginationType = inputObjectType({
  name: "Pagination",
  definition(t) {
    t.nullable.int("take");
    t.nullable.int("skip");
  }
});
export const paginationSchema = jsonSchema;

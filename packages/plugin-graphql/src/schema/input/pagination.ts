import { inputObjectType } from "nexus";
import jsonSchema from "./pagination.schema.json";

export const paginationType = inputObjectType({
  name: "Pagination",
  description: "Control the range of the records to return.",
  definition(t) {
    t.nullable.int("take", {
      description:
        "Maximum number of records to return. Must be greater than 0."
    });
    t.nullable.int("skip", {
      description: "Number of records to skip. Must be greater or equal than 0."
    });
  }
});
export const paginationSchema = jsonSchema;

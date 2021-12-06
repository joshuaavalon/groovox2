import * as input from "./input";
import * as mutation from "./mutation";

export const schemas = [...input.schemas, ...mutation.schemas];
export const schemaIds = {
  ...input.schemaIds,
  ...mutation.schemaIds
};

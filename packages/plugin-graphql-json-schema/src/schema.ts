import * as filter from "./filter";
import * as input from "./input";
import * as studio from "./studio";

export const schemas = [...filter.schemas, ...input.schemas, ...studio.schemas];
export const schemaIds = {
  ...filter.schemaIds,
  ...input.schemaIds,
  ...studio.schemaIds
};

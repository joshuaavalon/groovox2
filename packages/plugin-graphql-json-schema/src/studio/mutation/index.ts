import createOne from "./create-one.schema.json";
import updateOne from "./update-one.schema.json";

export const schemas = [createOne, updateOne];
export const schemaIds = {
  [createOne.title]: createOne.$id,
  [updateOne.title]: updateOne.$id
};

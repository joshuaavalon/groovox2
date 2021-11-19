import { splitSchemaModels } from "@groovox/graphql-util";

import attachment from "./attachment";
import filter from "./filter";
import input from "./input";
import output from "./output";
import person from "./person";
import role from "./role";
import studio from "./studio";
import tag from "./tag";
import tagCategory from "./tag-category";

export const { schemaTypes, jsonSchemas } = splitSchemaModels(
  attachment,
  filter,
  input,
  output,
  person,
  role,
  studio,
  tag,
  tagCategory
);

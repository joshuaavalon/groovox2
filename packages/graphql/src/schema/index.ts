import { splitSchemaModels } from "@groovox/graphql-util";

import attachment from "./attachment";
import filter from "./filter";
import input from "./input";
import movie from "./movie";
import output from "./output";
import person from "./person";
import studio from "./studio";
import tag from "./tag";
import tagCategory from "./tag-category";
import unit from "./unit";

export const { schemaTypes, jsonSchemas } = splitSchemaModels(
  attachment,
  filter,
  input,
  movie,
  output,
  person,
  studio,
  tag,
  tagCategory,
  unit
);

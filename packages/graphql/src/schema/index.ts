import { splitSchemaModels } from "@groovox/graphql-util";

import filter from "./filter";
import input from "./input";
import movie from "./movie";
import output from "./output";
import person from "./person";
import role from "./role";
import studio from "./studio";
import tag from "./tag";
import tagCategory from "./tag-category";
import unit from "./unit";

export const { schemaTypes, jsonSchemas } = splitSchemaModels(
  filter,
  input,
  movie,
  output,
  person,
  role,
  studio,
  tag,
  tagCategory,
  unit
);

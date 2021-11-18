import attachmentTypes from "./attachment";
import filterTypes from "./filter";
import { inputSchemas, inputTypes } from "./input";
import outputTypes from "./output";
import personTypes from "./person";
import roleTypes from "./role";
import studioTypes from "./studio";
import { tagSchemas, tagTypes } from "./tag";
import tagCategoryTypes from "./tag-category";

export const types = [
  ...attachmentTypes,
  ...filterTypes,
  ...inputTypes,
  ...outputTypes,
  ...personTypes,
  ...roleTypes,
  ...studioTypes,
  ...tagTypes,
  ...tagCategoryTypes
];

export const schemas = [...inputSchemas, ...tagSchemas];

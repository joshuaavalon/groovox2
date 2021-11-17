import attachmentTypes from "./attachment";
import filterTypes from "./filter";
import inputTypes from "./input";
import outputTypes from "./output";
import personTypes from "./person";
import roleTypes from "./role";
import studioTypes from "./studio";
import tagTypes from "./tag";
import tagCategoryTypes from "./tag-category";

const types = [
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

export default types;

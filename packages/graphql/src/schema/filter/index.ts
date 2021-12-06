import booleanFilter from "./boolean";
import dateNullableFilter from "./date-nullable";
import dateTimeFilter from "./date-time";
import decimalNullableFilter from "./decimal-nullable";
import decimalFilter from "./decimal";
import stringFilter from "./string";
import uuidFilter from "./uuid";

const schemaModels = [
  booleanFilter,
  dateNullableFilter,
  dateTimeFilter,
  decimalNullableFilter,
  decimalFilter,
  stringFilter,
  uuidFilter
];

export default schemaModels;

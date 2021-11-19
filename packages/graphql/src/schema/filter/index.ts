import booleanFilter from "./boolean-filter";
import dateNullableFilter from "./date-nullable-filter";
import dateTimeFilter from "./date-time-filter";
import decimalFilter from "./decimal-filter";
import stringFilter from "./string-filter";
import uuidFilter from "./uuid-filter";

const schemaModels = [
  booleanFilter,
  dateNullableFilter,
  dateTimeFilter,
  decimalFilter,
  stringFilter,
  uuidFilter
];

export default schemaModels;

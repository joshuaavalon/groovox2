import BooleanFilter from "./boolean-filter";
import DateNullableFilter from "./date-nullable-filter";
import DateTimeFilter from "./date-time-filter";
import DecimalFilter from "./decimal-filter";
import StringFilter from "./string-filter";
import UUIDFilter from "./uuid-filter";

const filters = [
  BooleanFilter,
  DateNullableFilter,
  DateTimeFilter,
  DecimalFilter,
  StringFilter,
  UUIDFilter
];

export default filters;

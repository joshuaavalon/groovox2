import { asNexusMethod } from "nexus";
import {
  DateResolver,
  DateTimeResolver,
  TimeResolver,
  UUIDResolver
} from "graphql-scalars";

import { GraphQLDecimal } from "./decimal";

export const scalarTypes = [
  asNexusMethod(UUIDResolver, "uuid", "string"),
  asNexusMethod(DateResolver, "date", "Date"),
  asNexusMethod(TimeResolver, "time", "Date"),
  asNexusMethod(DateTimeResolver, "dateTime", "Date"),
  asNexusMethod(GraphQLDecimal, "decimal", "number")
];

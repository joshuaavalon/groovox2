import { asNexusMethod } from "nexus";
import { DateResolver } from "graphql-scalars";

export const date = asNexusMethod(DateResolver, "date", "Date");

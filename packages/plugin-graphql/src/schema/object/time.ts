import { asNexusMethod } from "nexus";
import { TimeResolver } from "graphql-scalars";

export const time = asNexusMethod(TimeResolver, "time", "Date");

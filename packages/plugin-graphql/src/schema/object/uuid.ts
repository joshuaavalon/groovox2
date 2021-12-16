import { asNexusMethod } from "nexus";
import { UUIDResolver } from "graphql-scalars";

export const uuid = asNexusMethod(UUIDResolver, "uuid", "string");

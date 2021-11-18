import {
  asNexusMethod,
  fieldAuthorizePlugin,
  makeSchema,
  queryComplexityPlugin
} from "nexus";
import path from "path";
import {
  DateResolver,
  DateTimeResolver,
  TimeResolver,
  UUIDResolver
} from "graphql-scalars";
import { nexusAjvPlugin } from "@groovox/nexus-ajv";

import { types as schemaTypes } from "./schema";
import { GraphQLDecimal } from "./scalar";

import type {} from "./nexus.generated";
export * as nexus from "./nexus.generated";

export const createSchema = (typegen?: string): ReturnType<typeof makeSchema> =>
  makeSchema({
    shouldGenerateArtifacts: Boolean(typegen),
    outputs: {
      typegen
    },
    nonNullDefaults: {
      output: true,
      input: true
    },
    types: [
      asNexusMethod(UUIDResolver, "uuid", "string"),
      asNexusMethod(DateResolver, "date", "Date"),
      asNexusMethod(TimeResolver, "time", "Date"),
      asNexusMethod(DateTimeResolver, "dateTime", "Date"),
      asNexusMethod(GraphQLDecimal, "decimal", "number"),
      ...schemaTypes
    ],
    plugins: [
      fieldAuthorizePlugin(),
      queryComplexityPlugin(),
      nexusAjvPlugin()
    ],
    contextType: {
      module: path.join(__dirname, "context.ts"),
      export: "GraphqlContext"
    }
  });

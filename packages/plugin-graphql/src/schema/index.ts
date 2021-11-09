import {
  asNexusMethod,
  fieldAuthorizePlugin,
  makeSchema,
  queryComplexityPlugin
} from "nexus";
import path from "path";
import { UUIDResolver } from "graphql-scalars";
import worldTypes from "./world";

import type {} from "./nexus.generated";
export * as nexus from "./nexus.generated";

const resolveRoot = (...subPath: string[]): string =>
  path.join(__dirname, "..", "..", ...subPath);

export const createSchema = (
  generateArtifacts = false
): ReturnType<typeof makeSchema> =>
  makeSchema({
    shouldExitAfterGenerateArtifacts: generateArtifacts,
    shouldGenerateArtifacts: generateArtifacts,
    outputs: {
      typegen: resolveRoot("src", "schema", "nexus.generated.ts")
    },
    nonNullDefaults: {
      output: true,
      input: true
    },
    types: [asNexusMethod(UUIDResolver, "uuid", "string"), ...worldTypes],
    plugins: [fieldAuthorizePlugin(), queryComplexityPlugin()],
    contextType: {
      module: path.join(__dirname, "context.ts"),
      export: "GraphqlContext"
    }
  });

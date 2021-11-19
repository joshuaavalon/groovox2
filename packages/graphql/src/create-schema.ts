import { fieldAuthorizePlugin, makeSchema, queryComplexityPlugin } from "nexus";
import { nexusAjvPlugin } from "@groovox/nexus-ajv";

import { schemaTypes } from "./schema";
import { scalarTypes } from "./scalar";

import type { TypingImport } from "nexus/dist/definitions/_types";
import type {} from "@groovox/graphql-type";

export const createSchema = (
  typegen?: string,
  contextType?: TypingImport
): ReturnType<typeof makeSchema> =>
  makeSchema({
    shouldGenerateArtifacts: Boolean(typegen),
    outputs: { typegen },
    nonNullDefaults: {
      output: true,
      input: true
    },
    types: [...scalarTypes, ...schemaTypes],
    plugins: [
      fieldAuthorizePlugin(),
      queryComplexityPlugin(),
      nexusAjvPlugin()
    ],
    contextType
  });

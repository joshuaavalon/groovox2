import { fieldAuthorizePlugin, makeSchema, queryComplexityPlugin } from "nexus";

import { mutations } from "./mutation";
import { objects } from "./object";
import { queries } from "./query";

import type { TypingImport } from "nexus/dist/definitions/_types";
import type {} from "./nexus.generated";

export const createSchema = (
  typegen?: string,
  schema?: string,
  contextType?: TypingImport
): ReturnType<typeof makeSchema> =>
  makeSchema({
    shouldGenerateArtifacts: Boolean(typegen),
    outputs: { typegen, schema },
    nonNullDefaults: {
      output: true,
      input: true
    },
    types: [...mutations, ...objects, ...queries],
    plugins: [fieldAuthorizePlugin(), queryComplexityPlugin()],
    contextType
  });

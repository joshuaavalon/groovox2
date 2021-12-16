import path from "path";

import { createSchema } from "../src/schema";

const resolveRoot = (...subPath: string[]): string =>
  path.join(__dirname, "..", ...subPath);

const typegen = resolveRoot("src", "schema", "nexus.generated.ts");
const schema = resolveRoot("nexus.generated.graphql");
const contextType = {
  module: "mercurius",
  export: "MercuriusContext"
};

createSchema(typegen, schema, contextType);

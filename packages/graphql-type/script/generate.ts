import path from "path";

import { createGraphqlSchema } from "../../graphql/src/index";

const resolveRoot = (...subPath: string[]): string =>
  path.join(__dirname, "..", ...subPath);

const typegen = resolveRoot("src", "nexus.generated.ts");
const schema = resolveRoot("nexus.generated.graphql");
const contextType = {
  module: resolveRoot("src", "context.ts"),
  export: "GraphqlContext"
};

createGraphqlSchema(typegen, schema, contextType);

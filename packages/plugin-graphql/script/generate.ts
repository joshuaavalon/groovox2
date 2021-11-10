import path from "path";

import { createSchema } from "../src/create-schema";

const resolveRoot = (...subPath: string[]): string =>
  path.join(__dirname, "..", ...subPath);

createSchema(resolveRoot("src", "nexus.generated.ts"));

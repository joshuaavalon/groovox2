import jsonSchema from "./index.schema.json";

import type { Type as DateTimeFilter } from "../date-time-filter";
import type { Type as StringFilter } from "../string-filter";
import type { Type as UUIDFilter } from "../uuid-filter";

export type Type = {
  id?: UUIDFilter | null;
  name?: StringFilter | null;
  description?: StringFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  and?: Type | null;
  or?: Type | null;
  not?: Type | null;
};

export const schema = jsonSchema;

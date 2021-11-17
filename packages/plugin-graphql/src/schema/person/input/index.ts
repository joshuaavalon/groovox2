import { createOneInput } from "./create-one";
import { findManyInput } from "./find-many";
import { findOneInput } from "./find-one";
import { orderByInput } from "./order-by";
import { updateOneInput } from "./update-one";

export const inputs = [
  createOneInput,
  findManyInput,
  findOneInput,
  orderByInput,
  updateOneInput
];

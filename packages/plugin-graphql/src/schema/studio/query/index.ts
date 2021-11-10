import { findMany, findManyInput, OrderByInput } from "./find-many";
import { findOne, findOneInput } from "./find-one";

export const queries = [
  findMany,
  findManyInput,
  OrderByInput,
  findOne,
  findOneInput
];

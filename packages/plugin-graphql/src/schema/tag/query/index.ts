import { findMany, findManySchema } from "./find-many";
import { findOne } from "./find-one";

export const queries = [findMany, findOne];
export const querySchemas = [findManySchema];

import { sortOrderType } from "./sort-order";
import { paginationSchema, paginationType } from "./pagination";

export const inputTypes = [sortOrderType, paginationType];
export const inputSchemas = [paginationSchema];

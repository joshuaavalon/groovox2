import { inputs } from "./input";
import { queries, querySchemas } from "./query";
import { models } from "./model";
import { mutations } from "./mutation";

export const tagTypes = [...models, ...queries, ...mutations, ...inputs];
export const tagSchemas = [...querySchemas];

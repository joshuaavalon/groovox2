import { inputs } from "./input";
import { queries } from "./query";
import { models } from "./model";
import { mutations } from "./mutation";

const types = [...models, ...queries, ...mutations, ...inputs];
export default types;

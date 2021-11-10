import { queries } from "./query";
import { models } from "./model";
// import { mutations } from "./mutation";

const types = [...models, ...queries];
export default types;

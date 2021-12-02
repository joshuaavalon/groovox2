import { inputs } from "./input";
import { queries } from "./query";
import { models } from "./model";
import { mutations } from "./mutation";

const schemaModels = [...inputs, ...queries, ...models, ...mutations];

export default schemaModels;

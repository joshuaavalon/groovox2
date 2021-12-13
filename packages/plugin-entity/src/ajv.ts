import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";

import type { Options, ValidateFunction } from "ajv/dist/2020";
import * as booleanFilter from "./schema/boolean-filter";

export interface Validate {
  (data: unknown): Promise<unknown[] | null | undefined>;
}

type Schemas = {
  [booleanFilter.schema.$id]: booleanFilter.Type;
};

const defaultAjvOptions: Options = {
  coerceTypes: true,
  useDefaults: true,
  removeAdditional: true,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false,
  validateFormats: true
};

export class AjvValidator {
  private ajv: Ajv;

  constructor(opts: Options = {}) {
    this.ajv = addFormats(new Ajv({ ...defaultAjvOptions, ...opts }));
    this.ajv.addSchema(booleanFilter.schema);
  }

  getSchema<T extends keyof Schemas>(id: T): ValidateFunction<Schemas[T]> {
    const fn = this.ajv.getSchema(id) as ValidateFunction<Schemas[T]>;
    if (!fn) {
      throw new Error(`Unknown schema: (${id})`);
    }
    return fn;
  }
}

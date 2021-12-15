import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";
import addKeywords from "ajv-keywords";
import { entitySchemas } from "./schema";

import type { Options, ValidateFunction } from "ajv/dist/2020";

import type { EntitySchemas } from "@groovox/plugin-entity";

export interface Validate {
  (data: unknown): Promise<unknown[] | null | undefined>;
}

const defaultAjvOptions: Options = {
  coerceTypes: true,
  useDefaults: true,
  removeAdditional: true,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false,
  validateFormats: true
};

export class Validator {
  private ajv: Ajv;

  constructor(opts: Options = {}) {
    let ajv = new Ajv({ ...defaultAjvOptions, ...opts });
    ajv = addFormats(ajv);
    ajv = addKeywords(ajv, ["instanceof"]);
    this.ajv = ajv;
    entitySchemas.forEach(schema => this.ajv.addSchema(schema));
  }

  getSchema<T extends keyof EntitySchemas>(
    id: T
  ): ValidateFunction<EntitySchemas[T]> {
    const fn = this.ajv.getSchema(id) as ValidateFunction<EntitySchemas[T]>;
    if (!fn) {
      throw new Error(`Unknown schema: (${id})`);
    }
    return fn;
  }
}

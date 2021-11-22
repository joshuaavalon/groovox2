import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";

import type {
  AnySchema,
  AsyncValidateFunction,
  Options,
  ValidateFunction
} from "ajv/dist/2020";
import { Validate, Validator } from "./type";

const defaultAjvOptions: Options = {
  coerceTypes: true,
  useDefaults: true,
  removeAdditional: true,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false,
  validateFormats: true
};

export declare type AnyValidateFunction<T = any> =
  | ValidateFunction<T>
  | AsyncValidateFunction<T>;

const toValidate =
  (fn: AnyValidateFunction): Validate =>
  async data => {
    await fn(data);
    return fn.errors;
  };

export class AjvValidator implements Validator {
  private ajv: Ajv;

  constructor(opts: Options = {}) {
    this.ajv = addFormats(new Ajv({ ...defaultAjvOptions, ...opts }));
  }

  addSchema(schema: unknown): void {
    this.ajv.addSchema(schema as AnySchema);
  }

  getSchema(id: string): Validate | null | undefined {
    const fn = this.ajv.getSchema(id);
    if (!fn) {
      return undefined;
    }
    return toValidate(fn);
  }
}

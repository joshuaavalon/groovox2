import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";

import type {
  Options as AjvOptions,
  AsyncValidateFunction,
  ValidateFunction
} from "ajv";
import type { FastifyServerOptions } from "fastify";
import type {} from "@fastify/ajv-compiler";

type AnyValidateFunction<T = any> =
  | ValidateFunction<T>
  | AsyncValidateFunction<T>;

const defaultAjvOptions = {
  coerceTypes: true,
  useDefaults: true,
  removeAdditional: true,
  // Explicitly set allErrors to `false`.
  // When set to `true`, a DoS attack is possible.
  allErrors: false,
  validateFormats: true
};

declare module "@fastify/ajv-compiler" {
  interface Options extends AjvOptions {}
}

declare module "fastify" {
  interface FastifyInstance {
    validatorCompiler: ValidatorCompiler["buildValidatorFunction"];
  }
}
export class ValidatorCompiler {
  private ajv: Ajv;

  constructor(
    externalSchemas: unknown,
    options: FastifyServerOptions["ajv"] = {}
  ) {
    const { customOptions = {} } = options;
    this.ajv = new Ajv({
      ...defaultAjvOptions,
      ...(customOptions as any)
    });

    let addFormatPlugin = true;
    if (options.plugins && options.plugins.length > 0) {
      for (const plugin of options.plugins) {
        if (Array.isArray(plugin)) {
          addFormatPlugin =
            addFormatPlugin && plugin[0].name !== "formatsPlugin";
          plugin[0](this.ajv, plugin[1]);
        } else {
          addFormatPlugin = addFormatPlugin && plugin.name !== "formatsPlugin";
          plugin(this.ajv);
        }
      }
    }

    if (addFormatPlugin) {
      addFormats(this.ajv);
    }

    const sourceSchemas = Object.values(externalSchemas as any);
    for (const extSchema of sourceSchemas) {
      this.ajv.addSchema(extSchema as any);
    }
  }

  buildValidatorFunction<T>({
    schema /*, method, url, httpPart */,
    schemaId
  }: any): AnyValidateFunction<T> {
    // Ajv does not support compiling two schemas with the same
    // id inside the same instance. Therefore if we have already
    // compiled the schema with the given id, we just return it.
    const id = schemaId ?? schema.$id;
    if (id) {
      const stored = this.ajv.getSchema(id);
      if (stored) {
        return stored as AnyValidateFunction<T>;
      }
    }

    return this.ajv.compile<T>(schema);
  }
}

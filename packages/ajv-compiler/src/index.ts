import Ajv from "ajv/dist/2020";

import { ValidatorCompiler } from "./compiler";

import type { FastifyServerOptions } from "fastify";

export type ValidatorCompilerFn = (
  externalSchemas: unknown,
  options: FastifyServerOptions["ajv"]
) => Ajv;

const AjvReference = Symbol.for("fastify.ajv-compiler.reference");

export default function validatorSelector(): ValidatorCompilerFn {
  const validatorPool = new Map();

  return function buildCompilerFromPool(externalSchemas, options) {
    const { customOptions = {} } = options ?? {};
    const externals = JSON.stringify(externalSchemas);
    const ajvConfig = JSON.stringify(customOptions);

    const uniqueAjvKey = `${externals}${ajvConfig}`;
    if (validatorPool.has(uniqueAjvKey)) {
      return validatorPool.get(uniqueAjvKey);
    }

    const compiler = new ValidatorCompiler(externalSchemas, options);
    const ret = compiler.buildValidatorFunction.bind(compiler);
    validatorPool.set(uniqueAjvKey, ret);

    if (customOptions.code !== undefined) {
      ret[AjvReference] = compiler;
    }

    return ret;
  };
}

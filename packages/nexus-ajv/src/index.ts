import _ from "lodash";
import { plugin } from "nexus";
import mercurius from "mercurius";
import { printedGenTyping, printedGenTypingImport } from "nexus/dist/core";

import type { GraphQLResolveInfo } from "graphql";
import type {
  ArgsValue,
  GetGen,
  MaybePromise,
  NexusPlugin,
  SourceValue
} from "nexus/dist/core";
import type { AsyncValidateFunction, ValidateFunction } from "ajv";
import type { FastifyInstance } from "fastify";

const { ErrorWithProps } = mercurius;

export type FieldSchemaResolver<
  TypeName extends string,
  FieldName extends string
> = (
  root: SourceValue<TypeName>,
  args: ArgsValue<TypeName, FieldName>,
  context: GetGen<"context">,
  info: GraphQLResolveInfo
) => MaybePromise<string>;

const FieldSchemaResolverImport = printedGenTypingImport({
  module: "@groovox/nexus-ajv",
  bindings: ["FieldSchemaResolver"]
});

const fieldDefTypes = printedGenTyping({
  optional: true,
  name: "schema",
  description: "Schema validation with ajv",
  type: "FieldSchemaResolver<TypeName, FieldName>",
  imports: [FieldSchemaResolverImport]
});

type AnyValidateFunction<T = any> =
  | ValidateFunction<T>
  | AsyncValidateFunction<T>
  | undefined;

export const nexusAjvPlugin = (): NexusPlugin =>
  plugin({
    name: "Nexus Arguments ajv Validation Plugin",
    description: "Schema validation with ajv",
    fieldDefTypes: fieldDefTypes,
    onCreateFieldResolver(config) {
      const { fieldConfig } = config;
      const schemaId = fieldConfig.extensions?.nexus?.config.schema;
      if (!schemaId) {
        return undefined;
      }
      if (!_.isString(schemaId)) {
        console.error(
          new Error(
            `The schema property provided to ${fieldConfig.name} with type ${
              fieldConfig.type
            } should be a string, saw ${typeof schemaId}`
          )
        );
        return undefined;
      }

      return async function (root, args, ctx, info, next) {
        const fastify: FastifyInstance = ctx.fastify;
        const validate = fastify.getSchema(schemaId) as AnyValidateFunction;
        if (!validate) {
          throw new ErrorWithProps("Unable to load schema", {
            code: "AJV_SCHEMA_NOT_FOUND",
            fieldConfig: {
              name: fieldConfig.name,
              type: fieldConfig.type
            }
          });
        }

        await validate(args);
        const { errors } = validate;
        if (errors && errors.length > 0) {
          throw new ErrorWithProps(
            "Invalid arguments",
            {
              code: "AJV_SCHEMA_INVALID_ARGS",
              fieldConfig: {
                name: fieldConfig.name,
                type: fieldConfig.type
              },
              errors
            },
            400
          );
        }

        return next(root, args, ctx, info);
      };
    }
  });

import _ from "lodash";
import { plugin } from "nexus";
import mercurius from "mercurius";
import { printedGenTyping, printedGenTypingImport } from "nexus/dist/core";

import type { NexusPlugin } from "nexus/dist/core";
import type { FastifyInstance } from "fastify";
import type {} from "@groovox/plugin-validate";
import type {} from "@groovox/plugin-graphql-json-schema";

const { ErrorWithProps } = mercurius;

export type FieldSchemaResolver = string | boolean;

const FieldSchemaResolverImport = printedGenTypingImport({
  module: "@groovox/nexus-ajv",
  bindings: ["FieldSchemaResolver"]
});

const fieldDefTypes = printedGenTyping({
  optional: true,
  name: "schema",
  description: "Schema validation with ajv",
  type: "FieldSchemaResolver",
  imports: [FieldSchemaResolverImport]
});

export const nexusAjvPlugin = (): NexusPlugin =>
  plugin({
    name: "Nexus Arguments ajv Validation Plugin",
    description: "Schema validation with ajv",
    fieldDefTypes: fieldDefTypes,
    onCreateFieldResolver(config) {
      const { fieldConfig } = config;
      const schemaRef = fieldConfig.extensions?.nexus?.config.schema;
      if (!schemaRef) {
        return undefined;
      }
      if (!_.isString(schemaRef) && !_.isBoolean(schemaRef)) {
        console.error(
          new Error(
            `The schema property provided to ${fieldConfig.name} with type ${
              fieldConfig.type
            } should be a string or function, saw ${typeof schemaRef}`
          )
        );
        return undefined;
      }

      return async function (root, args, ctx, info, next) {
        const fastify: FastifyInstance = ctx.fastify;
        const schemaId = _.isString(schemaRef)
          ? schemaRef
          : fastify.graphqlJsonSchemaIds[fieldConfig.name];
        const validate = schemaId ? fastify.validate.getSchema(schemaId) : null;
        if (!validate) {
          throw new ErrorWithProps("Unable to load schema", {
            code: "AJV_SCHEMA_NOT_FOUND",
            fieldConfig: {
              name: fieldConfig.name,
              type: fieldConfig.type
            }
          });
        }

        const errors = await validate(args);
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

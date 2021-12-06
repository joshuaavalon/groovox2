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

const { ErrorWithProps } = mercurius;

export type FieldValidationResolver<
  TypeName extends string,
  FieldName extends string
> = (
  root: SourceValue<TypeName>,
  args: ArgsValue<TypeName, FieldName>,
  context: GetGen<"context">,
  info: GraphQLResolveInfo
) => MaybePromise<boolean>;

const FieldValidationResolverImport = printedGenTypingImport({
  module: "@groovox/nexus-validate",
  bindings: ["FieldValidationResolver"]
});

const fieldDefTypes = printedGenTyping({
  optional: true,
  name: "validate",
  description: "Schema validation",
  type: "FieldValidationResolver<TypeName, FieldName>",
  imports: [FieldValidationResolverImport]
});

export const nexusValidationPlugin = (): NexusPlugin =>
  plugin({
    name: "Nexus Arguments Validation Plugin",
    description: "Schema validation",
    fieldDefTypes: fieldDefTypes,
    onCreateFieldResolver(config) {
      const { fieldConfig } = config;
      const validateFn = fieldConfig.extensions?.nexus?.config.validate;
      if (!validateFn) {
        return undefined;
      }
      if (!_.isFunction(validateFn)) {
        console.error(
          new Error(
            `The schema property provided to ${fieldConfig.name} with type ${
              fieldConfig.type
            } should be a function, saw ${typeof validateFn}`
          )
        );
        return undefined;
      }

      return async function (root, args, ctx, info, next) {
        const valid = await validateFn(root, args, ctx, info);
        if (!valid) {
          throw new ErrorWithProps(
            "Invalid arguments",
            {
              code: "INVALID_ARGS",
              fieldConfig: {
                name: fieldConfig.name,
                type: fieldConfig.type
              }
            },
            400
          );
        }
        return next(root, args, ctx, info);
      };
    }
  });

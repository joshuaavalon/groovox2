import { GraphQLScalarType, Kind } from "graphql";
import type { GraphQLScalarTypeConfig } from "graphql";
import { Decimal } from "@prisma/client/runtime";
import _ from "lodash";

export { Decimal } from "@prisma/client/runtime";

const config: GraphQLScalarTypeConfig<Decimal, number> = {
  name: "Decimal",
  description: "The `Decimal` scalar type to represent values",
  serialize(value) {
    if (!(value instanceof Decimal)) {
      throw new TypeError(
        `Decimal cannot represent non Decimal type ${JSON.stringify(value)}`
      );
    }
    return value.toNumber();
  },
  parseValue(value) {
    if (!_.isNumber(value)) {
      throw new TypeError(
        `Decimal cannot represent non number type ${JSON.stringify(value)}`
      );
    }
    return new Decimal(value);
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.FLOAT) {
      const value = "value" in ast ? ast.value : null;
      throw new TypeError(`Decimal cannot represent non number type ${value}`);
    }
    const { value } = ast;
    return new Decimal(value);
  }
};
export const GraphQLDecimal = new GraphQLScalarType(config);

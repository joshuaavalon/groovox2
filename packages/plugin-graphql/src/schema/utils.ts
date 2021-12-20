import _ from "lodash";

export const adaptDefined = <T, U>(
  input: T | null | undefined,
  fn: (input: T) => U
): U | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  return fn(input);
};

export const adaptArrayDefined = <T, U>(
  input: T[] | null | undefined,
  fn: (input: T) => U
): U[] | undefined => {
  if (_.isNil(input)) {
    return undefined;
  }
  return input.map(i => fn(i));
};

export const guardNil =
  <T, U>(fn: (input: T) => U) =>
  (input: T | null | undefined): U | undefined => {
    if (_.isNil(input)) {
      return undefined;
    }
    return fn(input);
  };

export const guardNilArray =
  <T, U>(fn: (input: T) => U) =>
  (input: T[] | null | undefined): U[] | undefined => {
    if (_.isNil(input)) {
      return undefined;
    }
    return input.map(i => fn(i));
  };

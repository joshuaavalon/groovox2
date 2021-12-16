export const mapArray = <T, U>(
  data: T[] | null | undefined,
  fn: (input: T) => U
): U[] | undefined => {
  if (!data) {
    return undefined;
  }
  if (data.length <= 0) {
    return undefined;
  }
  return data.map(i => fn(i));
};

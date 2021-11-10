import _ from "lodash";

type Ignore<T> = {
  [P in keyof T]: Exclude<T[P], null | undefined>;
};

export const ignoreNil = <T>(obj?: T | null): Ignore<T> =>
  _.isNil(obj) ? {} : (_.omitBy(obj, _.isNil) as any);

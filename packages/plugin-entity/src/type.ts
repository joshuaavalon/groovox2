export interface ValidateFn<T> {
  (data: unknown): data is T;
}

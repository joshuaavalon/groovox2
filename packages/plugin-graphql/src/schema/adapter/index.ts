export * from "./boolean-filter";
export * from "./date-nullable-filter";
export * from "./date-time-filter";
export * from "./decimal-nullable-filter";
export * from "./movie-create-one-input";
export * from "./movie-find-many-input";
export * from "./movie-find-one-input";
export * from "./movie-order-by-input";
export * from "./movie-update-one-input";
export * from "./movie-role-create-one-input";
export * from "./movie-role-find-many-input";
export * from "./movie-role-find-one-input";
export * from "./movie-role-update-one-input";
export * from "./pagination";
export * from "./person-create-one-input";
export * from "./person-find-many-input";
export * from "./person-find-one-input";
export * from "./person-order-by-input";
export * from "./person-update-one-input";
export * from "./string-filter";
export * from "./studio-create-one-input";
export * from "./studio-find-many-input";
export * from "./studio-find-one-input";
export * from "./studio-order-by-input";
export * from "./studio-update-one-input";
export * from "./tag-category-create-one-input";
export * from "./tag-category-find-many-input";
export * from "./tag-category-find-one-input";
export * from "./tag-category-order-by-input";
export * from "./tag-category-update-one-input";
export * from "./tag-create-one-input";
export * from "./tag-find-many-input";
export * from "./tag-find-one-input";
export * from "./tag-order-by-input";
export * from "./tag-update-one-input";
export * from "./unit-create-one-input";
export * from "./unit-find-many-input";
export * from "./unit-find-one-input";
export * from "./unit-order-by-input";
export * from "./unit-update-one-input";
export * from "./uuid-filter";

declare global {
  interface InputAdapter<I, O> {
    (input: Readonly<I>): O;
  }
}

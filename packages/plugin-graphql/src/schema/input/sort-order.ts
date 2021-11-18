import { enumType } from "nexus";

export const sortOrderType = enumType({
  name: "SortOrder",
  members: ["asc", "desc"]
});

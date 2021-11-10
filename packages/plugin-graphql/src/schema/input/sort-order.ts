import { enumType } from "nexus";

const input = enumType({
  name: "SortOrder",
  members: ["asc", "desc"]
});

export default input;

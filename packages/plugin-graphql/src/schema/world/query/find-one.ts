import { nullable, queryField } from "nexus";

export const findOne = queryField("style", {
  type: nullable("Style"),
  args: {},
  resolve: async () => ({
    a: "ef002361-3003-48f2-9544-2fb7ecd32194"
  })
});

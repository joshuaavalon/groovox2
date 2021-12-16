import { asNexusMethod } from "nexus";
import { GraphQLUpload } from "graphql-upload";

export const fileUpload = asNexusMethod(GraphQLUpload, "fileUpload", {
  module: "graphql-upload",
  export: "FileUpload"
});

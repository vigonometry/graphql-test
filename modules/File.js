import { createModule, gql } from "graphql-modules";

export const File = createModule({
  id: "file",

  typeDefs: gql`
    type File {
      id: ID!
      title: String!
      path: String!
      size: Float!
      parentFolder: ID!
      openDate: String
      closeDate: String
    }
  `,
});

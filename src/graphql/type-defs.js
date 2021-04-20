const { gql } = require('apollo-server')

module.exports = gql`
  type Actor {
    actor_id: ID!
    first_name: String!
    last_name: String!
    last_update: String!
  }

  type User {
    id: ID!
    name: String!
    avatar: String!
  }

  type Query {
    actors: [Actor!]
  }

  type Mutation {
    """
    register a user using his github account
    """
    registerWithGithub(
      """
      the token string retrieved after authorizing
      """
      code: String!
      """
      compared string sent to github for validation to prevent 3rd party attack
      """
      state: String!
    ): User!
  }
`

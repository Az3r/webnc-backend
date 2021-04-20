const { ApolloServer } = require('apollo-server')
const { resolvers, typeDefs } = require('./graphql')
const { github } = require('./auth')
const knex = require('./database')

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: {
    knex,
    github
  }
})

module.exports = server

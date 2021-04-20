module.exports = {
  Query: {
    actors: async (_, __, { knex }, ___) => {
      const results = await knex.select('*').from('actor')
      return results
    }
  },

  Mutation: {
    registerWithGithub: async (_, { code, state }, { github, knex }, ___) => {
      const { access_token, token_type } = await github.authorize(code, state)
      // https://picsum.photos/200
      return {
        id: 1,
        name: 'demo',
        avatar: 'hello'
      }
    }
  }
}

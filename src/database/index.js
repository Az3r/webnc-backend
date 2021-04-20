const knex = require('knex').knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'azer',
    password: '12345',
    database: 'sakila'
  }
})

module.exports = knex

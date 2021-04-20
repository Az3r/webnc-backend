require('dotenv').config()
const server = require('../src/app')

server.listen(process.env.PORT, () =>
  console.log('listening on port ' + process.env.PORT)
)

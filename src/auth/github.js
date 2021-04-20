const axios = require('axios').default.create({
  baseURL: 'https://github.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000,
  responseType: 'json'
})

/** Exchange a specific code for an access token */
async function authorize(code = '', state = '') {
  const response = await axios.post('/login/oauth/access_token', {
    client_id: process.env.GITHUB_CLIENT,
    client_secret: process.env.GITHUB_SECRET,
    code,
    state
  })

  return validate(response.data)
}

module.exports = {
  authorize
}

function validate(value) {
  const { access_token, token_type } = value
  if (typeof access_token !== 'string') {
    throw new TypeError('access_token is not string')
  }
  if (typeof token_type !== 'string') {
    throw new TypeError('token_type is not string')
  }
  return value
}

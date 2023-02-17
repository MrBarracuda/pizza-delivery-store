import ky from 'ky'

const AUTH_TOKEN = 'someRandomText'

const instance = ky.create({
  prefixUrl: 'http://localhost:8000',
  headers: { authorization: AUTH_TOKEN },
  timeout: 1500,
  credentials: 'include',
})

export default instance

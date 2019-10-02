import axios from 'axios'

const instance = axios.create({
  baseURL: `https://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
  timeout: 1000,
  headers: {}
})
export default instance

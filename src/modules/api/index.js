import axios from "axios"

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
})

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('u:token')
  if (!token) return config

  config.headers['Auth-User-Token'] = token
  return config
})

export default api

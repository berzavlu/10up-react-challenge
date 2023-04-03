import axios from 'axios'
import { API_URL } from './constants'

const instance = axios.create({ baseURL: API_URL})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

const API = {
  get: (url, params) => instance.get(url, params),
  post: (url, params) => instance.post(url, params),
  delete: (url, params) => instance.delete(url, params),
  put: (url, params) => instance.put(url, params)
}

export default API

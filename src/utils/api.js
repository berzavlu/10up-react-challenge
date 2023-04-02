import axios from 'axios'

const API = {
  get: (url, params) => {
    // config header authorization
    const token = localStorage.getItem('token')

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    return axios.get(url, params)
  },
  post: (url, params) => {
    // config header authorization
    const token = localStorage.getItem('token')

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    return axios.post(url, params)
  }
}

export default API

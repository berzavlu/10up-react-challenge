import axios from 'axios'

const API = {
  get: (url, params) => {
    return axios.get(url, params)
  },
  post: (url, params) => {
    return axios.post(url, params)
  }
}

export default API

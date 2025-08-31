import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // your backend API base
  headers: {
    'Content-Type': 'application/json', // set the content type to JSON
  },
})

export default api

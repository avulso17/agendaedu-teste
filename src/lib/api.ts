import axios from 'axios'
import { DATABASE_BASE_URL } from '../constants/baseUrl'

const api = axios.create({
  baseURL: DATABASE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api

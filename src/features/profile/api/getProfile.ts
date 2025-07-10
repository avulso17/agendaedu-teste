import api from '@/lib/api'
import { Profile } from '../types'

export async function getProfile(): Promise<Profile> {
  const response = await api.get('/profile')
  return response.data
}

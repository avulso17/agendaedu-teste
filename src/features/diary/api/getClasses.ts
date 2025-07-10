import api from '@/lib/api'
import { Class } from '../types'

export async function getClasses(): Promise<Class[]> {
  const response = await api.get('/classes')
  return response.data
}

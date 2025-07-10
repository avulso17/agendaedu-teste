import api from '@/lib/api'
import { Student } from '../types'

export async function getStudents(): Promise<Student[]> {
  const response = await api.get('/students')
  return response.data
}

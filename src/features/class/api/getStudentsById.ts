import api from '@/lib/api'
import { Student } from '../types'

type GetStudentsProps = {
  id: string
}

export async function getStudentsById({
  id,
}: GetStudentsProps): Promise<Student> {
  const response = await api.get(`/students/${id}`)
  return response.data
}

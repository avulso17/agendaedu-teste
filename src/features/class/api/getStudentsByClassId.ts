import api from '@/lib/api'
import { GetStudentsProps, Student } from '../types'

export async function getStudentsByClassId({
  classId,
}: GetStudentsProps): Promise<Student[]> {
  const response = await api.get(`/students?classId=${classId}`)
  return response.data
}

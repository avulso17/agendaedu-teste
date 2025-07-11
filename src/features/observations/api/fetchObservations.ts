import api from '@/lib/api'

export async function fetchObservations(studentId: string) {
  const response = await api.get(`/observations?studentId=${studentId}`)
  return response.data
}

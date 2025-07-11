import api from '@/lib/api'

export async function createObservationFetch(studentId: string, text: string) {
  const response = await api.post(`/observations?studentId=${studentId}`, {
    studentId,
    text,
    favorite: false,
  })
  return response.data
}

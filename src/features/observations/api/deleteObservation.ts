import api from '@/lib/api'

export async function deleteObservation(studentId: string, obsId: string) {
  const response = await api.delete(
    `/observations/${obsId}?studentId=${studentId}`
  )
  return response.data
}

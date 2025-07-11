import api from '@/lib/api'

export async function toggleFavoriteObservation(
  studentId: string,
  obsId: string,
  text: string,
  favorite: boolean
) {
  const response = await api.put(
    `/observations/${obsId}?studentId=${studentId}`,
    {
      studentId,
      text,
      favorite,
    }
  )
  return response.data
}

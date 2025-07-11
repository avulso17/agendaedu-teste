import { useQuery } from '@tanstack/react-query'
import { fetchObservations } from '../api/fetchObservations'

export const useGetObservations = (studentId: string) => {
  return useQuery({
    queryKey: ['observations', studentId],
    queryFn: () => fetchObservations(studentId),
    enabled: !!studentId,
  })
}

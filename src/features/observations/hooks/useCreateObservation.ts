import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createObservationFetch } from '../api/createObservation'

export function useCreateObservation(studentId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (text: string) => createObservationFetch(studentId, text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['observations', studentId] })
    },
  })
}

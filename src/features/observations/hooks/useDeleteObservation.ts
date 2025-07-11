import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteObservation } from '../api/deleteObservation'

export function useDeleteObservation(studentId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (obsId: string) => deleteObservation(studentId, obsId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['observations', studentId] })
    },
  })
}

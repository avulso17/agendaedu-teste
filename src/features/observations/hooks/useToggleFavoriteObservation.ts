import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toggleFavoriteObservation } from '../api/toggleFavoriteObservation'

export function useToggleFavoriteObservation(studentId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      obsId,
      text,
      value,
    }: {
      obsId: string
      text: string
      value: boolean
    }) => toggleFavoriteObservation(studentId, obsId, text, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['observations', studentId] })
    },
  })
}

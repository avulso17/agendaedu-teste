import { useMutation, useQueryClient } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'
import { deleteObservation } from '../api/deleteObservation'

export function useDeleteObservation(studentId: string) {
  const queryClient = useQueryClient()

  const showToast = (
    type: 'success' | 'error',
    title: string,
    description: string
  ) => {
    Toast.show({
      type: type,
      text1: title,
      text2: description,
    })
  }

  return useMutation({
    mutationFn: (obsId: string) => deleteObservation(studentId, obsId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['observations', studentId] })
      showToast('success', 'Sucesso', 'Observação excluída com sucesso!')
    },
  })
}

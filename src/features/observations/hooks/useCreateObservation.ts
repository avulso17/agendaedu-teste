import { useMutation, useQueryClient } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'
import { createObservationFetch } from '../api/createObservation'

export function useCreateObservation(studentId: string) {
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
    mutationFn: (text: string) => createObservationFetch(studentId, text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['observations', studentId] })
      showToast('success', 'Sucesso', 'Observação criada com sucesso!')
    },
    onError: () => {
      showToast(
        'error',
        'Algo deu errado',
        'Observação não criada, tente novamente!'
      )
    },
  })
}

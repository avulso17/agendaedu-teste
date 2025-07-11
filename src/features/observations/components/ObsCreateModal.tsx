import Button from '@/components/Button'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useCallback, useState } from 'react'
import {
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useCreateObservation } from '../hooks/useCreateObservation'

export default function ObsCreateModal() {
  const { studentId } = useLocalSearchParams<{ studentId: string }>()
  const createObservation = useCreateObservation(studentId)
  const [text, setText] = useState('')
  const router = useRouter()

  const handleSavePress = useCallback(async () => {
    try {
      await createObservation.mutateAsync(text)
      router.back()
    } catch (error) {
      console.log('Erro', 'Não foi possível salvar a observação.')
    }
  }, [text])

  return (
    <TouchableWithoutFeedback onPress={router.back}>
      <View className='flex-1 bg-black/50 justify-center items-center'>
        <Pressable className='bg-white w-11/12 rounded-xl p-6'>
          <Text className='text-lg font-bold mb-4'>Adicionar Observação</Text>
          <TextInput
            className='border border-zinc-300 rounded-lg px-4 py-3 mb-4'
            placeholder='Digite sua observação'
            value={text}
            onChangeText={setText}
          />
          <Button onPress={handleSavePress} disabled={!text}>
            <Text>Salvar</Text>
          </Button>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  )
}

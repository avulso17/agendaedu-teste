import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import { useStudentsByClass } from '../hooks/useStudentsByClass'
import ClassTabView from './ClassTabView'

export default function ClassContent() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { isLoading, error } = useStudentsByClass(id)

  if (isLoading)
    return (
      <View className='px-4 pt-5'>
        <Text className='text-center'>Carregando...</Text>
      </View>
    )

  if (error)
    return (
      <View className='px-4 pt-5'>
        <Text className='text-center'>Erro ao carregar os dados</Text>
      </View>
    )

  return <ClassTabView />
}

import { useStudentsById } from '@/features/class/hooks/useStudentById'
import { useLocalSearchParams } from 'expo-router'
import { FlatList, Text } from 'react-native'
import ClassObsDetailsCard from './ClassObsDetailsCard'

export default function ClassObsDetailsList() {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { data, isLoading, error } = useStudentsById('1')

  if (error)
    return <Text className='text-center pt-5'>Ops... Algo deu errado</Text>

  return (
    <FlatList
      className='pt-5 px-4'
      data={data?.observations}
      renderItem={({ item }) => (
        <ClassObsDetailsCard
          key={item.id}
          id={item.id}
          observation={item.text}
          favorite={item.favorite}
        />
      )}
    />
  )
}

import { useQueryClient } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { FlatList, Text } from 'react-native'
import { Student } from '../../types'
import ClassObservationsCard from './ClassObservationsCard'

export default function ClassObservationsList() {
  const { classId } = useLocalSearchParams<{ classId: string }>()
  const queryClient = useQueryClient()
  const students = queryClient.getQueryData<Student[]>(['students', classId])

  if (!students)
    return <Text className='text-center pt-5'>Nada para exibir</Text>

  return (
    <FlatList
      data={students}
      renderItem={({ item }) => (
        <ClassObservationsCard
          studentId={item.id}
          name={item.name}
          imgSrc={item.imgSrc}
        />
      )}
      className='gap-4 pt-5 px-4'
    />
  )
}

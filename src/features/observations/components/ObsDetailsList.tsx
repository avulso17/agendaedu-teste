import Empty from '@/components/Empty'
import { FlatList, Text } from 'react-native'
import { useGetObservations } from '../hooks/useFetchObservations'
import ObsDetailsCard from './ObsDetailsCard'

export default function ObsDetailsList() {
  // const { id } = useLocalSearchParams<{ id: string }>()
  const studentId = '1'
  const { data, isLoading, error } = useGetObservations(studentId)

  if (isLoading) return <Text className='text-center pt-5'>Carregando...</Text>

  if (error)
    return <Text className='text-center pt-5'>Ops... Algo deu errado</Text>

  if (data && data.length < 1) return <Empty />

  return (
    <FlatList
      className='pt-5 px-4'
      data={data}
      renderItem={({ item }) => (
        <ObsDetailsCard
          key={item.id}
          studentId={studentId}
          id={item.id}
          observation={item.text}
          favorite={item.favorite}
        />
      )}
    />
  )
}

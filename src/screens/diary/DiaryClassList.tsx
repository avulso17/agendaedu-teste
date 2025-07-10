import { useStudents } from '@/features/diary/hooks/useStudents'
import { FlatList, Text } from 'react-native'
import DiaryClassCard from './DiaryClassCard'

export default function DiaryClassList() {
  const { data, isLoading, error } = useStudents()

  if (isLoading) return <Text>Carregando...</Text>
  if (error) return <Text>Erro ao carregar dados</Text>

  return (
    <FlatList
      className='pt-5 flex-1 border-t border-grey-400/25 px-4'
      data={data}
      renderItem={({ item }) => (
        <DiaryClassCard title={item.name} studentsAmount={data?.length ?? 0} />
      )}
    />
  )
}

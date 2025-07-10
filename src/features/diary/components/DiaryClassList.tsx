import { FlatList, Text } from 'react-native'
import { useClasses } from '../hooks/useClasses'
import DiaryClassCard from './DiaryClassCard'

export default function DiaryClassList() {
  const { data, isLoading, error } = useClasses()

  if (isLoading) return <Text>Carregando...</Text>
  if (error) return <Text>Erro ao carregar dados</Text>

  return (
    <FlatList
      className='pt-5 flex-1 border-t border-grey-400/25 px-4'
      data={data}
      renderItem={({ item }) => (
        <DiaryClassCard
          id={item.id}
          name={item.name}
          period={item.period}
          studentsAmount={item.studentsCount}
        />
      )}
    />
  )
}

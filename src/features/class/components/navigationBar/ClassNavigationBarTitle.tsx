import { Class } from '@/features/diary/types'
import { useQueryClient } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function ClassNavigationBarTitle() {
  const { classId } = useLocalSearchParams()
  const queryClient = useQueryClient()
  const classes = queryClient.getQueryData<Class[]>(['classes'])
  const selectedClass = classes?.find((item) => item.id === classId)
  const { name, period } = {
    name: selectedClass?.name ?? 'Classe',
    period: selectedClass?.period ?? 'Período',
  }

  return (
    <View className='flex-1'>
      <Text className='text-sm text-black/60'>
        {name} - {period}
      </Text>
      <Text className='text-base font-semibold'>Diário</Text>
    </View>
  )
}

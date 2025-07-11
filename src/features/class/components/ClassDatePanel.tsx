import { formatTodayDate } from '@/utils/formatTodayDate'
import { Text, View } from 'react-native'

export default function ClassDatePanel() {
  return (
    <View className='pl-5 mb-5'>
      <Text className='text-sm font-semibold'>{formatTodayDate()}</Text>
    </View>
  )
}

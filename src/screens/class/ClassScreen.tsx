import ClassContent from '@/features/diary/components/ClassContent'
import ClassHeader from '@/features/diary/components/ClassHeader'
import { View } from 'react-native'

export default function ClassScreen() {
  return (
    <View className='flex-1'>
      <ClassHeader />
      <ClassContent />
    </View>
  )
}

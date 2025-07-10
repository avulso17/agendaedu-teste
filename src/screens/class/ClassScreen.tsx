import ClassContent from '@/features/class/components/ClassContent'
import ClassHeader from '@/features/class/components/ClassHeader'
import { View } from 'react-native'

export default function ClassScreen() {
  return (
    <View className='flex-1'>
      <ClassHeader />
      <ClassContent />
    </View>
  )
}

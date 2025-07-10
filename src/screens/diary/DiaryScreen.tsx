import { View } from 'react-native'
import DiaryClassCard from './DiaryClassCard'
import DiaryNavigationBar from './DiaryNavigationBar'

export default function DiaryScreen() {
  return (
    <View className='flex-1 bg-white'>
      <DiaryNavigationBar />

      <View className='flex-1 border-t border-grey-400/25 px-4 pt-5 gap-4'>
        <DiaryClassCard title='Infantil I - Manhã' studentsAmount={0} />
        <DiaryClassCard title='Infantil 2 - Manhã' studentsAmount={0} />
      </View>
    </View>
  )
}

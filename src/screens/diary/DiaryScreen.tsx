import DiaryClassList from '@/features/diary/components/DiaryClassList'
import DiaryNavigationBar from '@/features/diary/components/DiaryNavigationBar'
import { SafeAreaView, View } from 'react-native'

export default function DiaryScreen() {
  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView>
        <DiaryNavigationBar />
      </SafeAreaView>
      <DiaryClassList />
    </View>
  )
}

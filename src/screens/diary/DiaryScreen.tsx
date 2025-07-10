import { SafeAreaView, View } from 'react-native'
import DiaryClassList from './DiaryClassList'
import DiaryNavigationBar from './DiaryNavigationBar'

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

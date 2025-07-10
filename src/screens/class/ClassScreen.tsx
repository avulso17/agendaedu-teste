import { View } from 'react-native'
import ClassDatePanel from './ClassDatePanel'
import ClassNavigationBar from './ClassNavigationBar'
import ClassTabsPanel from './ClassTabsPanel'

export default function ClassScreen() {
  return (
    <View className='flex-1'>
      <ClassNavigationBar />
      <ClassDatePanel />
      <ClassTabsPanel />
    </View>
  )
}

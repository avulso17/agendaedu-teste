import { SafeAreaView } from 'react-native'
import ClassDatePanel from './ClassDatePanel'
import ClassNavigationBar from './ClassNavigationBar'

export default function ClassHeader() {
  return (
    <SafeAreaView>
      <ClassNavigationBar />
      <ClassDatePanel />
    </SafeAreaView>
  )
}

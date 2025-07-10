import { SafeAreaView } from 'react-native'
import ClassDatePanel from './ClassDatePanel'
import ClassNavigationBar from './navigationBar/'

export default function ClassHeader() {
  return (
    <SafeAreaView>
      <ClassNavigationBar />
      <ClassDatePanel />
    </SafeAreaView>
  )
}

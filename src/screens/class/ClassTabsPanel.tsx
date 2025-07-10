import { Text, View } from 'react-native'
import ClassObservationsList from './observations/ClassObservationsList'

export default function ClassTabsPanel() {
  return (
    <View className='px-4'>
      <View className='pt-5'>
        <Text>Header btn grp</Text>
      </View>

      <ClassObservationsList />
    </View>
  )
}

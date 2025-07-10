import { View } from 'react-native'
import ClassObservationsCard from './ClassObservationsCard'

export default function ClassObservationsList() {
  return (
    <View className='gap-4 pt-5'>
      <ClassObservationsCard />
      <ClassObservationsCard />
    </View>
  )
}

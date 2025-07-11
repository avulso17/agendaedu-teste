import { View } from 'react-native'
import ObsDetailsList from './ObsDetailsList'
import ObsNavigationBar from './navigationBar'

export default function ObsDetails() {
  return (
    <View className='flex-1 bg-white'>
      <ObsNavigationBar />
      <ObsDetailsList />
    </View>
  )
}

import ObsDetailsList from '@/features/observations/components/ObsDetailsList'
import ObsNavigationBar from '@/features/observations/components/ObsNavigationBar'
import { View } from 'react-native'

export default function ObservationsScreen() {
  return (
    <View className='flex-1 bg-white'>
      <ObsNavigationBar />
      <ObsDetailsList />
    </View>
  )
}

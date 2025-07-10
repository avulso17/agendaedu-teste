import { View } from 'react-native'
import ClassMockCard from './ClassMockCard'

export default function ClassMockTabView() {
  return (
    <View className='pt-5 px-4'>
      <ClassMockCard />
      <ClassMockCard />
    </View>
  )
}

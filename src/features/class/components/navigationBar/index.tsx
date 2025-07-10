import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import { View } from 'react-native'
import ClassBackButton from './ClassBackButton'
import ClassNavigationBarTitle from './ClassNavigationBarTitle'

export default function ClassNavigationBar() {
  return (
    <View className='flex-row items-center p-2 mb-4'>
      <ClassBackButton />
      <ClassNavigationBarTitle />

      <View className='flex-row gap-1'>
        <IconButton
          icon={<FeatherIcon name='search' size={24} color={COLORS.dark} />}
          variant='ghost'
        />
        <IconButton
          icon={
            <FeatherIcon name='more-horizontal' size={24} color={COLORS.dark} />
          }
          variant='ghost'
        />
      </View>
    </View>
  )
}

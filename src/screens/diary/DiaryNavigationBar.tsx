import IconButton from '@/src/components/IconButton'
import { COLORS } from '@/src/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import { Text, View } from 'react-native'

export default function DiaryNavigationBar() {
  return (
    <View className='flex-row items-center p-2 mb-4'>
      <IconButton
        className='mr-1'
        variant='ghost'
        icon={<FeatherIcon name='chevron-left' size={24} color={COLORS.dark} />}
      />
      <Text className='flex-1 text-base font-semibold'>Diário</Text>

      <View className='flex-row gap-1'>
        <IconButton
          icon={<FeatherIcon name='search' size={24} color={COLORS.dark} />}
          variant='ghost'
        />
        <IconButton
          icon={<FeatherIcon name='filter' size={24} color={COLORS.dark} />}
          variant='ghost'
        />
        <IconButton
          icon={<FeatherIcon name='calendar' size={24} color={COLORS.dark} />}
          variant='ghost'
          disabled
        />
      </View>
    </View>
  )
}

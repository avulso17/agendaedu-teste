import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import { Text, View } from 'react-native'

export default function ClassNavigationBar() {
  return (
    <View className='flex-row items-center p-2 mb-4'>
      <IconButton
        className='mr-1'
        variant='ghost'
        icon={<FeatherIcon name='arrow-left' size={24} color={COLORS.dark} />}
      />
      <View className='flex-1'>
        <Text className='text-sm text-black/60'>Infantil I - Manhã</Text>
        <Text className='text-base font-semibold'>Diário</Text>
      </View>

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

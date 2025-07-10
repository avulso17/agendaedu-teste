import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import { SafeAreaView, Text, View } from 'react-native'
import ClassBackButton from '../../navigationBar/ClassBackButton'
import ClassObsDetailsList from './ClassObsDetailsList'

export default function ClassObsDetails() {
  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='bg-white border-b border-grey-200'>
        <View className='flex-row items-center p-2 mb-4'>
          <ClassBackButton />
          <View className='flex-1'>
            <Text className='text-sm text-black/60'>Victoria Robertson</Text>
            <Text className='text-base font-semibold'>Observações</Text>
          </View>

          <View className='flex-row gap-1'>
            <IconButton
              icon={<FeatherIcon name='plus' size={24} color={COLORS.dark} />}
              variant='ghost'
            />
            <IconButton
              icon={
                <FeatherIcon
                  name='more-horizontal'
                  size={24}
                  color={COLORS.dark}
                />
              }
              variant='ghost'
            />
          </View>
        </View>
      </SafeAreaView>

      <ClassObsDetailsList />
    </View>
  )
}

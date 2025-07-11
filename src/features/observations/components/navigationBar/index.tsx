import BackButton from '@/components/BackButton'
import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView, Text, View } from 'react-native'
import { useCreateObservation } from '../../hooks/useCreateObservation'

export default function ObsNavigationBar() {
  const createObservation = useCreateObservation('1')

  return (
    <SafeAreaView className='bg-white border-b border-grey-200'>
      <View className='flex-row items-center p-2 mb-4'>
        <BackButton />
        <View className='flex-1'>
          <Text className='text-sm text-black/60'>Victoria Robertson</Text>
          <Text className='text-base font-semibold'>Observações</Text>
        </View>

        <View className='flex-row gap-1'>
          <IconButton
            icon={<Feather name='plus' size={24} color={COLORS.dark} />}
            variant='ghost'
            onPress={() => createObservation.mutate('Uma descricao bonitinha')}
          />
          <IconButton
            icon={
              <Feather name='more-horizontal' size={24} color={COLORS.dark} />
            }
            variant='ghost'
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

import Avatar from '@/components/Avatar'
import IconButton from '@/components/IconButton'
import InputText from '@/components/InputText'
import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native'
import ClassObsModalList from './ClassObsModalList'

export default function ClassObservationsModal() {
  return (
    <View className='flex-1 bg-white'>
      <View className='bg-primary h-40 mb-12 relative z-10'>
        <Avatar
          className='mt-auto mx-auto -mb-8 h-32 w-32 shadow-[0px_4px_10px_0px] shadow-gray-500/20'
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />
      </View>

      <View className='pb-4 gap-2 border-b border-grey-200'>
        <Text className='text-center text-3xl font-semibold text-dark'>
          Victoria Robertson
        </Text>
      </View>

      <ClassObsModalList />

      <SafeAreaView className='bg-white absolute bottom-0 left-0 w-screen'>
        <KeyboardAvoidingView
          className='items-center px-8 flex-row gap-4'
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <InputText containerStyle={{ flexGrow: 1 }} placeholder='opa' />
          <IconButton
            icon={<FeatherIcon name='plus' size={24} color={COLORS.white} />}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}

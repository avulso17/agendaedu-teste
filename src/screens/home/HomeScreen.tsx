import Avatar from '@/components/Avatar'
import BottomNav from '@/components/BottomNav/Index'
import { COLORS } from '@/styles/colors'
import LucideIcon from '@react-native-vector-icons/lucide'
import { Text, View } from 'react-native'
import HomeNavButton from './HomeNavButton'

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-white'>
      <View className='bg-primary h-[15.375rem] mb-16 relative z-10'>
        <Avatar
          className='mt-auto mx-auto -mb-12 h-40 w-40 shadow-[0px_4px_20px_0px] shadow-gray-500/20'
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />
      </View>

      <View className='mb-10 gap-2'>
        <Text className='text-center text-3xl font-semibold text-dark'>
          Victoria Robertson
        </Text>
        <Text className='text-center text-base font-semibold text-dark'>
          O que deseja acessar hoje?
        </Text>
      </View>

      <View className='flex-row gap-12 justify-center'>
        <HomeNavButton
          href='/diary'
          title='Diário'
          icon={<LucideIcon name='notebook' size={24} color={COLORS.primary} />}
        />
        <HomeNavButton
          disabled
          title='Mensagens'
          icon={
            <LucideIcon
              name='message-square'
              size={24}
              color={COLORS.primary}
            />
          }
        />
      </View>

      <BottomNav />
    </View>
  )
}

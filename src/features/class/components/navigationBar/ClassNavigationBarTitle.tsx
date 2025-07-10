import { Text, View } from 'react-native'

export default function ClassNavigationBarTitle() {
  const { name, period } = { name: 'Infantil I', period: 'Manhã' }

  return (
    <View className='flex-1'>
      <Text className='text-sm text-black/60'>
        {name} - {period}
      </Text>
      <Text className='text-base font-semibold'>Diário</Text>
    </View>
  )
}

import { Text, View } from 'react-native'

export default function Empty() {
  return (
    <View className='flex-1 items-center justify-center p-6'>
      <Text className='text-lg text-gray-400 text-center'>
        Nada para mostrar
      </Text>
    </View>
  )
}

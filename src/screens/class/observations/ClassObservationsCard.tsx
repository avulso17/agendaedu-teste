import Avatar from '@/src/components/Avatar'
import Card from '@/src/components/Card'
import InputText from '@/src/components/InputText'
import { Text, View } from 'react-native'

export default function ClassObservationsCard() {
  return (
    <Card className='gap-4'>
      <View className='flex-row items-center gap-3'>
        <Avatar source={{ uri: 'https://i.pravatar.cc/300' }} />
        <Text className='font-medium text-black text-sm'>Nome do aluno</Text>
      </View>

      <InputText placeholder='Observations' />
    </Card>
  )
}

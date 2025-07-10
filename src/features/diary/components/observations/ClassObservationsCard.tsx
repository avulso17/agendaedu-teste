import Avatar from '@/components/Avatar'
import Card from '@/components/Card'
import InputText from '@/components/InputText'
import { Text, View } from 'react-native'

type ClassObservationsCardProps = {
  name: string | undefined
  imgSrc: string | { uri: string } | undefined
}

export default function ClassObservationsCard({
  name,
  imgSrc,
}: ClassObservationsCardProps) {
  return (
    <Card className='gap-4 py-3 mb-4'>
      <View className='flex-row items-center gap-3'>
        <Avatar source={imgSrc} />
        <Text className='font-medium text-black text-sm'>{name}</Text>
      </View>

      <InputText placeholder='Observations' />
    </Card>
  )
}

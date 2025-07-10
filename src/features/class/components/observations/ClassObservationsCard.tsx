import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import Card from '@/components/Card'
import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

type ClassObservationsCardProps = {
  name: string | undefined
  imgSrc?: string
}

export default function ClassObservationsCard({
  name,
  imgSrc,
}: ClassObservationsCardProps) {
  const router = useRouter()

  const handleOpenObservations = () => {
    router.push(`/student/observations/modal`)
  }

  return (
    <Card className='gap-4 py-3 mb-4'>
      <View className='flex-row items-center gap-3'>
        <Avatar source={{ uri: imgSrc }} />
        <Text className='font-medium text-black text-sm'>{name}</Text>
      </View>

      <View className='flex-row gap-3'>
        <Button
          size='sm'
          variant='text'
          className='flex-1 bg-primary/10'
          onPress={handleOpenObservations}
        >
          Observações
        </Button>
        <IconButton
          icon={<FeatherIcon name='plus' size={24} color={COLORS.light} />}
        />
      </View>
    </Card>
  )
}

import Card from '@/components/Card'
import FeatherIcon from '@react-native-vector-icons/feather'
import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

type DiaryClassCardProps = {
  id: number
  name: string
  period: string
  studentsAmount: number
}

export default function DiaryClassCard({
  id,
  name,
  period,
  studentsAmount,
}: DiaryClassCardProps) {
  const router = useRouter()

  const handlePress = () => {
    router.push(`/class/${id}`)
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <Card className='flex-row items-center justify-between mb-4'>
        <View className='gap-1'>
          <Text className='text-base text-dark font-semibold'>
            {name} - {period}
          </Text>
          <Text className='text-base text-black/60'>
            {studentsAmount} alunos
          </Text>
        </View>

        <FeatherIcon name='arrow-right' size={20} />
      </Card>
    </TouchableOpacity>
  )
}

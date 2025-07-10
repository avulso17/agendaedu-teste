import Card from '@/src/components/Card'
import FeatherIcon from '@react-native-vector-icons/feather'
import { Text, TouchableOpacity, View } from 'react-native'

type DiaryClassCardProps = {
  title: string
  studentsAmount: number
}

export default function DiaryClassCard({
  title,
  studentsAmount,
}: DiaryClassCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Card className='flex-row items-center justify-between'>
        <View className='gap-1'>
          <Text className='text-base text-dark font-semibold'>{title}</Text>
          <Text className='text-base text-black/60'>
            {studentsAmount} alunos
          </Text>
        </View>

        <FeatherIcon name='arrow-right' size={20} />
      </Card>
    </TouchableOpacity>
  )
}

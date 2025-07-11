import Card from '@/components/Card'
import { Text, View } from 'react-native'
import ObsDeleteButton from './ObsDeleteButton'
import ObsFavoriteButton from './ObsFavoriteButton'

type ObsModalListItemProps = {
  studentId: string
  id: string
  observation: string
  favorite: boolean
}

export default function ObsDetailsListItem({
  studentId,
  id,
  observation,
  favorite,
}: ObsModalListItemProps) {
  return (
    <Card className='mb-4 gap-4 flex-row items-center justify-between'>
      <Text className='flex-1 text-base'>{observation}</Text>

      <View className='flex-row gap-4'>
        <ObsFavoriteButton
          studentId={studentId}
          obsId={id}
          text={observation}
          favorite={favorite}
        />
        <ObsDeleteButton studentId={studentId} obsId={id} />
      </View>
    </Card>
  )
}

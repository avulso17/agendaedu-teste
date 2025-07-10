import Card from '@/components/Card'
import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import { Text, View } from 'react-native'

type ClassObsModalListItemProps = {
  id: string
  observation: string
  favorite?: boolean
}

export default function ClassObsModalListItem({
  id,
  observation,
  favorite,
}: ClassObsModalListItemProps) {
  return (
    <Card className='mb-4 gap-4 flex-row items-center justify-between'>
      <Text className='flex-1 text-base'>{observation}</Text>

      <View className='flex-row gap-4'>
        <IconButton
          size='sm'
          variant='ghost'
          icon={
            favorite ? (
              <FeatherIcon name='heart' size={24} color={COLORS.primary} />
            ) : (
              <FeatherIcon name='heart' size={24} color={COLORS.primary} />
            )
          }
        />
        <IconButton
          size='sm'
          variant='ghost'
          icon={<FeatherIcon name='trash' size={24} color={COLORS.black} />}
        />
      </View>
    </Card>
  )
}

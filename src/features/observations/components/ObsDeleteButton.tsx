import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import { useDeleteObservation } from '../hooks/useDeleteObservation'

export default function ObsDeleteButton({
  studentId,
  obsId,
}: {
  studentId: string
  obsId: string
}) {
  const deleteObservation = useDeleteObservation(studentId)

  const handleDelete = () => {
    deleteObservation.mutate(obsId)
  }

  return (
    <IconButton
      size='sm'
      variant='ghost'
      icon={<FeatherIcon name='trash' size={24} color={COLORS.black} />}
      onPress={handleDelete}
    />
  )
}

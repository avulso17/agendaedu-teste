import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import { Ionicons } from '@expo/vector-icons'
import { useToggleFavoriteObservation } from '../hooks/useToggleFavoriteObservation'

export default function ObsFavoriteButton({
  studentId,
  obsId,
  text,
  favorite,
}: {
  studentId: string
  obsId: string
  text: string
  favorite: boolean
}) {
  const toggleFavorite = useToggleFavoriteObservation(studentId)

  const handleToggleFavorite = () => {
    toggleFavorite.mutate({ obsId, text, value: !favorite })
  }

  return (
    <IconButton
      size='sm'
      variant='ghost'
      icon={
        <IconButton
          size='sm'
          variant='ghost'
          icon={
            favorite ? (
              <Ionicons name='heart' size={24} color={COLORS.primary} />
            ) : (
              <Ionicons name='heart-outline' size={24} color={COLORS.primary} />
            )
          }
        />
      }
      onPress={handleToggleFavorite}
    />
  )
}

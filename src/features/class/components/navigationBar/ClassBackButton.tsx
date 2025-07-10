import IconButton from '@/components/IconButton'
import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'
import { useRouter } from 'expo-router'

export default function ClassBackButton() {
  const router = useRouter()

  return (
    <IconButton
      variant='ghost'
      icon={<FeatherIcon name='arrow-left' size={24} color={COLORS.dark} />}
      onPress={() => router.back()}
    />
  )
}

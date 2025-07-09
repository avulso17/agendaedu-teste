import {} from '@react-native-vector-icons/common'
import IconButton from '../IconButton'

type BottomNavButton = {
  icon: React.ReactNode
  name: string
  route: any
  disabled?: boolean
  active?: boolean
}

export default function BottomNavButton({
  icon,
  name,
  disabled,
  active = false,
}: BottomNavButton) {
  return (
    <IconButton
      className={`w-16 ${active ? 'bg-primary/10 text-white' : 'bg-transparent text-dark'}`}
      shape='square'
      icon={icon}
      disabled={disabled}
    />
  )
}

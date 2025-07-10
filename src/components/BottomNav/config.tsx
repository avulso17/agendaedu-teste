import { COLORS } from '@/styles/colors'
import FeatherIcon from '@react-native-vector-icons/feather'

export const BOTTOM_NAV_CONFIG = [
  {
    name: 'home',
    icon: <FeatherIcon name='home' size={24} color={COLORS.primary} />,
    route: 'home',
  },
  {
    name: 'favorites',
    icon: <FeatherIcon name='heart' size={24} color={COLORS.dark} />,
    route: 'favorites',
  },
  {
    name: 'profile',
    icon: <FeatherIcon name='user' size={24} color={COLORS.dark} />,
    route: 'profile',
    disabled: true,
  },
  {
    name: 'settings',
    icon: <FeatherIcon name='settings' size={24} color={COLORS.dark} />,
    route: 'settings',
    disabled: true,
  },
]

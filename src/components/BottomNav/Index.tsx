import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BottomNavButton from './BottomNavButton'
import { BOTTOM_NAV_CONFIG } from './config'

export default function BottomNav() {
  const insets = useSafeAreaInsets()

  return (
    <View
      className='absolute bottom-0 py-4 w-screen bg-white px-6 shadow-[0px_-4px_24px_0px] shadow-primary/10'
      style={{ paddingBottom: insets.bottom }}
    >
      <View className='flex-row justify-between items-center'>
        {BOTTOM_NAV_CONFIG.map((item) => (
          <BottomNavButton
            key={item.name}
            name={item.name}
            icon={item.icon}
            route={item.route}
            disabled={item.disabled}
            active={item.name === 'home'}
          />
        ))}
      </View>
    </View>
  )
}

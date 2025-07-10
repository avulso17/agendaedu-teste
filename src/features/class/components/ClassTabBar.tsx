// components/CustomTabBar.tsx
import { Pressable, Text, View } from 'react-native'
import type { Route } from 'react-native-tab-view'

type Props = {
  navigationState: { index: number; routes: Route[] }
  jumpTo: (key: string) => void
}

export const ClassTabBar = ({ navigationState, jumpTo }: Props) => {
  return (
    <View className='flex-row border-b border-grey-400/25'>
      {navigationState.routes.map((route, idx) => {
        const isActive = navigationState.index === idx

        return (
          <Pressable
            key={route.key}
            onPress={() => jumpTo(route.key)}
            className='flex-1 items-center py-3'
          >
            <Text className={isActive ? 'text-primary font-bold' : 'text-gray'}>
              {route.title}
            </Text>
            {isActive && (
              <View className='w-6 h-1 bg-primary rounded-full mt-2' />
            )}
          </Pressable>
        )
      })}
    </View>
  )
}

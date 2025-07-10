import '../styles/global.css'

import Providers from '@/providers/Providers'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Providers>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='student/observations/modal'
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name='student/observations/modal/[id]'
          options={{ presentation: 'modal' }}
        />
      </Stack>
    </Providers>
  )
}

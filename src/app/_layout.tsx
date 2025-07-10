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
      />
    </Providers>
  )
}

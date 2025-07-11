import '../styles/global.css'

import Providers from '@/providers/Providers'
import { Stack } from 'expo-router'
import Toast from 'react-native-toast-message'

export default function RootLayout() {
  return (
    <Providers>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
      <Toast />
    </Providers>
  )
}

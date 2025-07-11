import { COLORS } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import IconButton from './IconButton'

export default function BackButton() {
  const router = useRouter()
  return (
    <IconButton
      variant='ghost'
      icon={<Feather name='arrow-left' size={24} color={COLORS.dark} />}
      onPress={() => router.back()}
    />
  )
}

import React from 'react'
import { Image, ImageStyle, StyleProp, View } from 'react-native'
import { cn } from '../utils/cn'

type AvatarSize = 'sm' | 'md' | 'lg'
type AvatarShape = 'circle' | 'square'

interface AvatarProps {
  source: any
  size?: AvatarSize
  shape?: AvatarShape
  style?: StyleProp<ImageStyle>
  className?: string
}

const sizeClassMap: Record<AvatarSize, string> = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-20 h-20',
}

const shapeClassMap: Record<AvatarShape, string> = {
  circle: 'rounded-full',
  square: 'rounded-lg',
}

const Avatar: React.FC<AvatarProps> = ({
  source,
  size = 'md',
  shape = 'circle',
  style,
  className = '',
}) => {
  const sizeClass = sizeClassMap[size]
  const shapeClass = shapeClassMap[shape]
  const mergedClass = cn(sizeClass, shapeClass)

  return (
    <View className={cn('bg-white p-1', mergedClass, className)}>
      <Image
        source={source}
        style={style}
        className={cn('h-full w-full', shapeClass)}
      />
    </View>
  )
}

export default Avatar

import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { cn } from '../utils/cn'

type IconButtonSize = 'sm' | 'md' | 'lg'
type IconButtonShape = 'circle' | 'square'
type IconButtonVariant = 'primary' | 'ghost'

interface IconButtonProps {
  icon: React.ReactNode
  onPress?: () => void
  size?: IconButtonSize
  shape?: IconButtonShape
  variant?: IconButtonVariant
  style?: StyleProp<ViewStyle>
  className?: string
  disabled?: boolean
}

const sizeClassMap: Record<IconButtonSize, string> = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

const shapeClassMap: Record<IconButtonShape, string> = {
  circle: 'rounded-full',
  square: 'rounded-lg',
}

const variantClassMap: Record<IconButtonVariant, string> = {
  primary: 'bg-primary',
  ghost: 'bg-transparent border border-grey-200',
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 'md',
  shape = 'circle',
  variant = 'primary',
  style,
  className = '',
  disabled = false,
}) => {
  const sizeClass = sizeClassMap[size]
  const shapeClass = shapeClassMap[shape]
  const variantClass = variantClassMap[variant]

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={cn(
        'items-center justify-center',
        sizeClass,
        shapeClass,
        variantClass,
        disabled ? 'opacity-50' : '',
        className
      )}
      style={style}
    >
      <View pointerEvents='none'>{icon}</View>
    </Pressable>
  )
}

export default IconButton

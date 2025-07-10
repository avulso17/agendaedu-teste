import React from 'react'
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
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
  ghost: 'bg-transparent',
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 'md',
  shape = 'square',
  variant = 'primary',
  style,
  className = '',
  disabled = false,
}) => {
  const sizeClass = sizeClassMap[size]
  const shapeClass = shapeClassMap[shape]
  const variantClass = variantClassMap[variant]

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      className={cn(
        'items-center justify-center',
        sizeClass,
        shapeClass,
        variantClass,
        className,
        {
          'opacity-50': disabled,
        }
      )}
      style={style}
    >
      <View pointerEvents='none'>{icon}</View>
    </TouchableOpacity>
  )
}

export default IconButton

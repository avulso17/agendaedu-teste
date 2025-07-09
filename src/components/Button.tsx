import React from 'react'
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native'
import { cn } from '../utils/cn'

type ButtonVariant = 'colorful' | 'outline' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  className?: string
  textClassName?: string
}

const variantStyles: Record<ButtonVariant, { button: string; text: string }> = {
  colorful: {
    button: 'bg-primary rounded-xl justify-center items-center',
    text: 'text-white font-semibold',
  },
  outline: {
    button:
      'border-2 border-primary rounded-xl justify-center items-center bg-transparent',
    text: 'text-primary font-semibold',
  },
  text: {
    button: 'bg-transparent justify-center items-center',
    text: 'text-primary font-semibold',
  },
}

const sizeStyles: Record<ButtonSize, { button: string; text: string }> = {
  sm: {
    button: 'py-2 px-3',
    text: 'text-sm',
  },
  md: {
    button: 'py-3 px-4',
    text: 'text-base',
  },
  lg: {
    button: 'py-4 px-6',
    text: 'text-lg',
  },
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'colorful',
  size = 'md',
  disabled = false,
  style,
  textStyle,
  className,
  textClassName,
}) => {
  const { button: variantButton, text: variantText } = variantStyles[variant]
  const { button: sizeButton, text: sizeText } = sizeStyles[size]

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={cn(
        variantButton,
        sizeButton,
        disabled && 'opacity-50',
        className
      )}
      style={style}
    >
      <Text
        className={cn(variantText, sizeText, textClassName)}
        style={textStyle}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default Button

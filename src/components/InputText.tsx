import React, { useRef } from 'react'
import {
  Keyboard,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native'
import { cn } from '../utils/cn'

interface InputTextProps extends TextInputProps {
  label?: string
  containerStyle?: StyleProp<ViewStyle>
  inputClassName?: string
}

const InputText: React.FC<InputTextProps> = ({
  label,
  containerStyle,
  inputClassName,
  ...props
}) => {
  const inputRef = useRef<TextInput>(null)

  const handleContainerPress = () => {
    if (inputRef.current && inputRef.current.isFocused()) {
      inputRef.current.blur()
      Keyboard.dismiss()
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress} accessible={false}>
      <View style={containerStyle}>
        {label && <Text className='mb-1 text-base text-black'>{label}</Text>}
        <TextInput
          ref={inputRef}
          className={cn(
            'border border-grey-200 rounded px-4 py-2 h-9 text-black bg-grey-100 block appearance-none',
            inputClassName
          )}
          placeholderTextColor='#A0A0A0'
          {...props}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default InputText

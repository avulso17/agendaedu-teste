import { SafeAreaView, StyleProp, ViewStyle } from 'react-native'

interface SafeAreaContainerViewProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export default function SafeAreaContainerView({
  children,
  style,
}: SafeAreaContainerViewProps) {
  return (
    <SafeAreaView className='bg-white flex-1' style={style}>
      {children}
    </SafeAreaView>
  )
}

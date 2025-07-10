import { View } from 'react-native'
import { cn } from '../utils/cn'

type CardProps = {
  children?: React.ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <View
      className={cn(
        [
          'border-l-4 border-primary bg-white rounded-md p-5',
          'shadow-[0px_0px_12px_0px] shadow-primary/15',
        ],
        className
      )}
    >
      {children}
    </View>
  )
}

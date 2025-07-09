import IconButton from '@/src/components/IconButton'
import { Text, View } from 'react-native'

type HomeNavButtonProps = {
  title: string
  icon: React.ReactNode
}

export default function HomeNavButton({ title, icon }: HomeNavButtonProps) {
  return (
    <View className='min-w-[4.5rem] items-center gap-2.5'>
      <IconButton
        className='bg-white shadow-[0px_0px_12px_0px] shadow-primary/15'
        size='lg'
        shape='square'
        icon={icon}
      />
      <Text className='text-sm font-light text-dark'>{title}</Text>
    </View>
  )
}

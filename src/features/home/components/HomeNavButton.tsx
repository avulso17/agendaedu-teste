import IconButton from '@/components/IconButton'
import { cn } from '@/lib/cn'
import { LinkProps, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

type HomeNavButtonProps = Partial<Pick<LinkProps, 'href'>> & {
  title: string
  icon: React.ReactNode
  disabled?: boolean
}

export default function HomeNavButton({
  title,
  icon,
  href,
  disabled,
}: HomeNavButtonProps) {
  const router = useRouter()

  const handlePress = () => {
    if (!disabled && href) router.push(href)
  }

  return (
    <View className='min-w-[4.5rem] items-center gap-2.5'>
      <IconButton
        className='bg-white shadow-[0px_0px_12px_0px] shadow-primary/15'
        size='lg'
        shape='square'
        icon={icon}
        onPress={handlePress}
        disabled={disabled}
      />

      <Text
        className={cn('text-sm font-light text-dark', {
          'opacity-50': disabled,
        })}
      >
        {title}
      </Text>
    </View>
  )
}

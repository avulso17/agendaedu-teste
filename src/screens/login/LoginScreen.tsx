import Button from '@/components/Button'
import InputText from '@/components/InputText'
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <View className='px-4 flex-1'>
        <Text className='mb-8 text-3xl font-semibold text-center'>Login</Text>

        <View className='space-y-4 gap-4'>
          <InputText placeholder='Email' keyboardType='email-address' />
          <InputText placeholder='Senha' secureTextEntry />
        </View>

        <View className='mt-auto pb-5 gap-2'>
          <Button size='lg'>Log In</Button>
          <Button size='lg' variant='text'>
            Forgot your password?
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

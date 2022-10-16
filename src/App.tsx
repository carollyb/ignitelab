import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { TextInput } from './components/TextInput'
import { Text } from './components/Text'
import './styles/global.css'
import { Checkbox } from './components/Checkbox'
import { i18next } from './translate/i18next'

export function App() {
  
  const switchLng = () => {
    localStorage.getItem('i18nextLng') == 'pt-BR' ? 
    localStorage.setItem('i18nextLng', 'en-US') : 
    localStorage.setItem('i18nextLng', 'pt-BR')
    window.location = window.location
  }

  return (
    <div className='w-screen h-screen bg-gray-800 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Heading size='lg'>
          {i18next.t('heading') as string}
        </Heading>
        <Text size='lg' className='text-gray-400 mt-2'>
          {i18next.t('message') as string}
        </Text>
      </header>
      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>{i18next.t('labels.email') as string}</Text>
          <TextInput.Root>
          <TextInput.Icon>
            <Envelope weight='thin' />
          </TextInput.Icon>
            <TextInput.Input
            id='email'
            placeholder={i18next.t('placeholders.email')} />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>{i18next.t('labels.password') as string}</Text>
          <TextInput.Root>
          <TextInput.Icon>
            <Lock weight='thin' />
          </TextInput.Icon>
            <TextInput.Input
            id='password'
            placeholder={i18next.t('placeholders.password')} />
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>{i18next.t('checkbox') as string}</Text>
        </label>
        <Button type='submit' className='mt-4'>
          {i18next.t('button.text') as string}
        </Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>{i18next.t('forgotPassword') as string}</a>
        </Text>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline hover:text-gray-200'>{i18next.t('signup') as string}</a>
        </Text>
        <Button 
        onClick={switchLng}
        className='mt-4'>
          {i18next.t('switchLng') as string}
        </Button>
      </footer>
    </div>
  )
}
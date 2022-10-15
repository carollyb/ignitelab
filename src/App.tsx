import { Button } from './components/Button'
import { TextInput } from './components/TextInput'
import './styles/global.css'

export function App() {
  return (
    <div className='bg-gray-800 h-96 p-10'>
      <h1 className='font-bold text-2xl text-violet-800'>Hello world</h1>
      <Button>Teste</Button>
      <TextInput
      placeholder='Type your email address' />
    </div>
  )
}
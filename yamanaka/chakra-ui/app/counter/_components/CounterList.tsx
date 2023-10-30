import Counter from './Counter'
import { Stack } from '@chakra-ui/react'

export default function CounterList() {
  return (
    <Stack direction={['column', 'row']} wrap='wrap'>
      <Counter />
      <Counter />
    </Stack>
  )
}

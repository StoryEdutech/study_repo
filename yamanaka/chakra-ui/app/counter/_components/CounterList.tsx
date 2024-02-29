'use client'
import Counter from './Counter'
import { Stack, Button, Flex } from '@chakra-ui/react'
import useCounters from '@/app/_hooks/useCounters'

export default function CounterList() {
  const { loading, data, nameUpdater, countUpdater, counterDeleter, createCounter } = useCounters()
  return (
    <Stack direction={['column', 'row']} wrap='wrap'>
      {data.map((value, index) => (
        <Counter
          key={index}
          count={value.count}
          name={value.name}
          loading={loading}
          setCount={countUpdater(index)}
          setName={nameUpdater(index)}
          onDelete={counterDeleter(index)}
        />
      ))}
      <Flex minH={272} alignItems='center'>
        <Button ml={8} onClick={createCounter}>
          +
        </Button>
      </Flex>
    </Stack>
  )
}

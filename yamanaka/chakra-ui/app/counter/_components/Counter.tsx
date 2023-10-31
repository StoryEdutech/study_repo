import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  HStack,
  Editable,
  EditablePreview,
  EditableTextarea,
  Skeleton,
  Center,
  CloseButton,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('カウンター')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('loading strage...')
    const storedCounter = localStorage.getItem('counter')
    if (storedCounter != null) {
      try {
        const counter = JSON.parse(storedCounter)
        if (Object.hasOwn(counter, 'name')) {
          console.log(typeof counter.name)
          if (typeof counter.name == 'string') setName(counter.name)
        }
        if (Object.hasOwn(counter, 'count')) {
          if (typeof counter.count == 'number') setCount(counter.count)
        }
      } catch {
        console.log('counter in localstrage is not correct JSON string')
      }
    }
    setLoading(false)
  }, [])
  useEffect(() => {
    if (loading == false)
      localStorage.setItem('counter', JSON.stringify({ name: name, count: count }))
  }, [count, name])
  return (
    <Card margin={5} minW={244} maxW={244}>
      <CardHeader>
        <Skeleton isLoaded={!loading}>
          <HStack justifyContent='space-between' alignItems='top'>
            <Editable value={name} onChange={(s) => setName(s)} flex={1}>
              <EditablePreview width='100%' wordBreak='break-all' />
              <EditableTextarea as={TextareaAutosize} width='100%' resize='none' minRows={1} />
            </Editable>
            <CloseButton />
          </HStack>
        </Skeleton>
      </CardHeader>

      <CardBody>
        <Skeleton isLoaded={!loading}>
          <Center>
            <Heading wordBreak='break-all'>{count.toLocaleString()}</Heading>
          </Center>
        </Skeleton>
      </CardBody>

      <CardFooter justify='center'>
        <Skeleton isLoaded={!loading}>
          <HStack spacing='3'>
            <Button onClick={() => setCount(count + 1)} colorScheme='green'>
              カウント
            </Button>
            <Button onClick={() => setCount(0)} colorScheme='red'>
              リセット
            </Button>
          </HStack>
        </Skeleton>
      </CardFooter>
    </Card>
  )
}

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
import TextareaAutosize from 'react-textarea-autosize'

export default function Counter({
  count,
  name,
  loading,
  setCount,
  setName,
  onDelete,
}: {
  count: number
  name: string
  loading: boolean
  setCount: (count: number) => void
  setName: (name: string) => void
  onDelete: () => void
}) {
  return (
    <Card margin={5} minW={244} maxW={244}>
      <CardHeader>
        <Skeleton isLoaded={!loading}>
          <HStack justifyContent='space-between' alignItems='top'>
            <Editable value={name} onChange={setName} flex={1}>
              <EditablePreview width='100%' wordBreak='break-all' />
              <EditableTextarea as={TextareaAutosize} width='100%' resize='none' minRows={1} />
            </Editable>
            <CloseButton onClick={onDelete} />
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

import Header from './_components/Header'
import UtilityCard from './_components/UtilitiyCard'
import { Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Header />
      <Stack m={8}>
        <UtilityCard
          title='カウンター'
          description='数を数えることができます。カウンターを複数使うこともできます。状態はブラウザに保存されます。'
          link='/counter'
        />
      </Stack>
    </>
  )
}
